/* Dependency-free build: refresh the responsive-image table and cache versions. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const hash = text => crypto.createHash('sha256').update(text).digest('hex').slice(0, 12);
let script = read('assets/site.js');
const images = JSON.parse(read('assets/image-manifest.json'));
const data = {};
for (const name of ['SERVICES', 'TASKS', 'CASES', 'VIDEOS']) {
  const declaration = script.match(new RegExp('var ' + name + ' = \\[([\\s\\S]*?)\\n  \\];'));
  if (!declaration) throw Error(`Missing ${name}`);
  vm.runInNewContext(declaration[0], data);
}
const paths = new Set(['assets/covers/story-recording-clean.png']);
data.SERVICES.forEach(x => paths.add('assets/services/' + x.img));
data.TASKS.forEach(x => paths.add('assets/tasks/' + x.img));
data.CASES.forEach(x => paths.add('assets/works/' + x.f));
data.VIDEOS.forEach(x => paths.add('assets/covers/' + x.cover));
const dynamicImages = Object.fromEntries([...paths].map(file => {
  if (!images[file]) throw Error(`No optimized image for ${file}`);
  return [file, images[file]];
}));
script = script.replace(/var IMAGE_ASSETS = [\s\S]*?; \/\* RESPONSIVE_IMAGE_MANIFEST \*\//,
  'var IMAGE_ASSETS = ' + JSON.stringify(dynamicImages) + '; /* RESPONSIVE_IMAGE_MANIFEST */');
new vm.Script(script, {filename:'assets/site.js'});
fs.writeFileSync(path.join(root, 'assets/site.js'), script);
let html = read('index.html');
html = html.replace(/assets\/site\.css\?v=[a-f0-9]+/, 'assets/site.css?v=' + hash(read('assets/site.css')))
  .replace(/assets\/site\.js\?v=[a-f0-9]+/, 'assets/site.js?v=' + hash(script));
// Discover the deferred script early, while retaining execution after HTML parsing.
const scriptTag = html.match(/<script src="assets\/site\.js[^>]+><\/script>/)[0];
html = html.replace(/\s*<script src="assets\/site\.js[^>]+><\/script>\s*/, '\n')
  .replace('</head>', scriptTag + '\n</head>');
fs.writeFileSync(path.join(root, 'index.html'), html);
require('./check-site.cjs');
