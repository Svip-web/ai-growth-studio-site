/* Package an explicit public allowlist. Never read or copy the private bot config. */
const fs=require('node:fs');
const path=require('node:path');
const cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
const output=path.resolve(root,'../outputs/ai-growth-hosting/public_html');
fs.mkdirSync(output,{recursive:true});
const assets=cp.execFileSync('git',['-c','safe.directory='+root.replaceAll('\\','/'),'ls-files','-z','assets'],{cwd:root,encoding:'utf8'})
  .split('\0').filter(Boolean);
const files=[...new Set(['index.html','en.html','assets/site.en.js','api/lead.php','api/lead-lib.php',...assets])];
for(const file of files){
  const target=path.join(output,file);
  if(!target.startsWith(output+path.sep))throw Error('Unsafe package path');
  fs.mkdirSync(path.dirname(target),{recursive:true});
  fs.copyFileSync(path.join(root,file),target);
}
console.log(`Hosting public files: ${files.length}. Private configuration was not read or copied.`);
