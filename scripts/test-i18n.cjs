const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const i18n=require('./i18n.cjs'),source=read('assets/site.js');
const catalog=JSON.parse(read('assets/translations/en.json')).text;
const english=read('en.html'),russian=read('index.html'),locale=read('assets/site.en.js');
const hash=crypto.createHash('sha256').update(locale).digest('hex').slice(0,12);
assert.equal(english,i18n.renderEnglish(russian,catalog,hash),'English page must be rebuilt from the current source');
assert(!/[\u0400-\u04ff]/.test(english.replace(/<!--[\s\S]*?-->/g,'')),'English HTML must be fully translated, including attributes');
assert.match(english,/<html lang="en">/);
assert.match(russian,/<html lang="ru">/);
assert.match(english,/href="en.html" class="on"[^>]*aria-current="page"/);
assert.match(russian,/href="index.html" class="on"[^>]*aria-current="page"/);
assert(english.indexOf('assets/site.en.js')<english.indexOf('assets/site.js'),'Locale must run before the application');
const context={window:{}};
vm.runInNewContext(locale,context);
vm.runInNewContext(source.slice(source.indexOf('  var locale ='),source.indexOf('  /* ---------- данные ---------- */')),context);
const data=i18n.datasets(source);
const localized=context.localize(data);
assert(!/[\u0400-\u04ff]/.test(JSON.stringify(localized)),'All services, tasks, cases and video labels must be translated');
assert.equal(localized.SERVICES.length,9);
assert.equal(localized.TASKS.length,11);
assert.equal(localized.CASES.length,10);
assert.equal(localized.TASKS[0].img,data.TASKS[0].img,'Localization must not change asset paths');
assert.equal(context.tr('Закрыть меню'),'Close menu');
assert.equal(context.tr('Включить звук'),'Unmute');
assert.equal(context.tr('Unknown'),'Unknown');
assert.match(english,/<h3 id="tsk-offer-title">A different goal\? <em>We’ll tailor a solution<\/em> to your brand\.<\/h3>/);
assert.match(russian,/<h3 id="tsk-offer-title">Не нашли свою задачу\? <em>Соберём решение<\/em> под ваш бренд<\/h3>/);
const css=read('assets/site.css');
assert.match(css,/html\[lang="en"\] \.tsk-offer-art\{position:relative; inset:auto; width:100%; height:auto/,
  'English offer artwork must occupy its own grid cell instead of overlapping copy');
for(const html of [english,russian]){
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(ids.length,new Set(ids).size);
  for(const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)){
    const url=match[1];
    if(url.startsWith('#')){if(url.length>1)assert(ids.includes(url.slice(1)),url);}
    else if(!/^(?:https?:|mailto:|tel:|data:)/.test(url))assert(fs.existsSync(path.join(root,url.split(/[?#]/)[0])),url);
  }
  assert.match(html,/https:\/\/www\.instagram\.com\/kovalenko\.jenny\//);
  assert(Buffer.byteLength(html)<60000,'HTML payload budget');
}
assert(Buffer.byteLength(locale)<60000,'English runtime payload budget');
console.log('English: static copy, metadata, accessible labels, dynamic datasets, active language links and shared assets passed.');
