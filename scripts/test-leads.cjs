/* Exercise the production form controller without sending real messages. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const source = fs.readFileSync(require('node:path').join(__dirname,'../assets/site.js'),'utf8');
const helper = source.slice(source.indexOf('  function bindLeadForm('),source.indexOf("  bindLeadForm('form'"));
function harness(fetch,host='studio.test'){
  const classes = ()=>({add(){},remove(){},toggle(){}});
  const field = value=>({value,disabled:false,setAttribute(){},focus(){},closest:()=>({classList:classes()})});
  const name=field('Test'),contact=field('@test'),question=field('Synthetic test'),trap=field('');
  const status={textContent:'',classList:classes()},button={disabled:false},note={hidden:true};
  let handler,success=0;
  const form={querySelector(s){return ({'.lead-status':status,'button[type="submit"]':button,
    '.lead-help':note,'textarea':question,'[name="website"]':trap})[s];},
    querySelectorAll:()=>[name,contact,question,trap,button],setAttribute(){},removeAttribute(){},
    addEventListener(event,fn){handler=fn;}};
  const document={documentElement:{lang:'en'},getElementById(id){return ({form,'i-name':name,'i-contact':contact})[id];}};
  const ctx={document,location:{hostname:host,href:'https://'+host+'/subdir/en.html#contact'},
    tr:x=>x,crypto,fetch,URL,AbortController,TypeError,setTimeout,clearTimeout};
  vm.runInNewContext(helper+"bindLeadForm('form','i-','contact',()=>success());",{...ctx,success(){success++;}});
  return {submit:()=>handler({preventDefault(){}}),name,contact,question,status,button,note,get success(){return success;}};
}
const init={ok:true,json:async()=>({ok:true,csrf:'a'.repeat(64)})};
(async()=>{
  const calls=[];
  const ok=harness(async(url,options)=>{calls.push([String(url),options]);return options.method?
    {ok:true,json:async()=>({ok:true})}:init;});
  await ok.submit();
  assert.equal(ok.success,1); assert.equal(calls.length,2);
  assert.equal(calls[0][0],'https://studio.test/subdir/api/lead.php');
  assert.equal(JSON.parse(calls[1][1].body).language,'en');
  assert.equal(calls[1][1].headers['X-Lead-CSRF'],'a'.repeat(64));
  assert(!ok.button.disabled);
  const failed=harness(async()=>({ok:false,json:async()=>({ok:false,code:'unavailable'})}));
  await failed.submit(); assert.equal(failed.success,0); assert.match(failed.status.textContent,/не отправлена/);
  assert(!failed.note.hidden,'Delivery errors expose a working contact link');
  assert.equal(failed.name.value,'Test');
  const unknown=harness(async(url,options)=>options.method?{ok:false,json:async()=>({ok:false,code:'status_unknown'})}:init);
  await unknown.submit(); assert.equal(unknown.success,0); assert.match(unknown.status.textContent,/Не отправляйте/);
  const malformed=harness(async(url,options)=>options.method?
    {ok:true,json:async()=>{throw new SyntaxError('Invalid response');}}:init);
  await malformed.submit();assert.equal(malformed.success,0);assert.match(malformed.status.textContent,/Не отправляйте/);
  let release,posts=0,ids=[];
  const pending=harness(async(url,options)=>{
    if(!options.method)return init;
    posts++; ids.push(JSON.parse(options.body).request_id);
    return new Promise(resolve=>{release=()=>resolve({ok:false,json:async()=>({ok:false,code:'delivery'})});});
  });
  const first=pending.submit(); await new Promise(setImmediate);
  assert(pending.button.disabled); await pending.submit(); assert.equal(posts,1);
  release(); await first;
  const retry=pending.submit();await new Promise(setImmediate);release();await retry;
  assert.equal(ids[0],ids[1],'Unchanged retry keeps idempotency key');
  pending.question.value='Updated request';
  const changed=pending.submit();await new Promise(setImmediate);release();await changed;
  assert.notEqual(ids[1],ids[2]);
  const invalid=harness(()=>{throw Error('Should not fetch');});invalid.name.value='';
  await invalid.submit();assert.equal(invalid.success,0);
  const preview=harness(()=>{throw Error('GitHub Pages cannot run PHP');},'svip-web.github.io');
  assert(preview.note.hidden);assert(!preview.button.disabled);
  await preview.submit();assert.equal(preview.success,0);assert(!preview.note.hidden);
  assert.match(preview.status.textContent,/не отправлена/);
  for(const page of ['index.html','en.html']){
    const html=fs.readFileSync(require('node:path').join(__dirname,'..',page),'utf8');
    assert.equal((html.match(/class="lead-status"/g)||[]).length,2);
    assert(!/hosting-note|Форма заработает|The form will be enabled/.test(html),'No temporary hosting notices');
    assert(!/Демонстрационный режим|Заявка заполнена верно|This is a demo/.test(html));
  }
  console.log('Leads: validation, CSRF, real acknowledgement, pending lock, honest errors, idempotency and static preview passed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
