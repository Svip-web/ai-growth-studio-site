/* Static integrity and payload budgets; no server or third-party package required. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html'), css = read('assets/site.css'), js = read('assets/site.js');
const manifest = JSON.parse(read('assets/image-manifest.json'));
assert.match(html, /^<!doctype html>/i, 'Use standards mode');
assert(!html.includes('fonts.googleapis.com'), 'Fonts must be self-hosted');
assert(!html.includes('no-store'), 'Do not disable browser caching');
assert.match(html, /<script src="assets\/site\.js[^>]+defer/, 'Defer application JavaScript');
new vm.Script(js, {filename:'assets/site.js'});
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate HTML id');
const checked = new Set();
function local(file) {
  file = file.split(/[?#]/)[0];
  if (!file || /^(?:https?:|data:|mailto:|tel:)/.test(file)) return;
  const full = path.resolve(root, file);
  assert(full.startsWith(root + path.sep), `Unsafe path: ${file}`);
  assert(fs.existsSync(full), `Missing asset: ${file}`);
  checked.add(file);
}
for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (url.startsWith('#')) {
    if (url.length > 1) assert(ids.includes(url.slice(1)), `Missing anchor: ${url}`);
  } else local(url);
}
for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
  match[1].split(',').forEach(candidate => local(candidate.trim().split(/\s+/)[0]));
}
for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
  if (tag[0].includes('src=')) {
    assert(/\bwidth="\d+"/.test(tag[0]) && /\bheight="\d+"/.test(tag[0]), 'Image dimensions are required');
  }
}
for (const url of css.matchAll(/url\(([^)]+)\)/g)) local('assets/' + url[1].replace(/["']/g, ''));
const variants = new Set();
for (const image of Object.values(manifest)) {
  assert(image.width > 0 && image.height > 0);
  local(image.src);
  image.srcset.split(',').forEach(candidate => {
    const [file, width] = candidate.trim().split(/\s+/);
    assert(/^\d+w$/.test(width)); local(file); variants.add(file);
  });
}
for (const file of ['assets/site.css', 'assets/site.js']) {
  const hash = crypto.createHash('sha256').update(read(file)).digest('hex').slice(0,12);
  assert(html.includes(file + '?v=' + hash), `Run npm run build after editing ${file}`);
}
const bytes = file => fs.statSync(path.join(root,file)).size;
assert(Buffer.byteLength(html) < 60000, 'HTML payload budget exceeded');
assert(Buffer.byteLength(js) < 60000, 'JavaScript payload budget exceeded');
assert(Buffer.byteLength(css) < 100000, 'CSS payload budget exceeded');
const imageBytes = [...variants].reduce((n,file) => n + bytes(file), 0);
assert(imageBytes < 6*1024*1024, 'Responsive image payload budget exceeded');
console.log(JSON.stringify({ok:true,checkedAssets:checked.size,responsiveVariants:variants.size,
  htmlBytes:Buffer.byteLength(html),cssBytes:Buffer.byteLength(css),jsBytes:Buffer.byteLength(js),
  responsiveImageBytes:imageBytes},null,2));
