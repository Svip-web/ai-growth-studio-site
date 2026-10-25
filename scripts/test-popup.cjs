/* Verify that consultation cannot auto-open from elapsed time or page scrolling. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../assets/site.js'), 'utf8');
const start = source.indexOf('  /* ---------- окно с приглашением на консультацию ---------- */');
const end = source.indexOf('  /* ---------- появление ---------- */', start);
assert(start >= 0 && end > start, 'Popup source section must exist');
const block = source.slice(start, end);
assert(!/setTimeout|setInterval|popScroll|popTimer|popSeen/.test(block), 'Popup must not have automatic triggers');
const elements = new Map(), globalHandlers = new Map();
const document = {body:{style:{}}, activeElement:null, getElementById:element};
function element(id) {
  if(elements.has(id)) return elements.get(id);
  const classes = new Set(), handlers = new Map();
  const node = {handlers, value:'',
    classList:{add:name => classes.add(name), remove:name => classes.delete(name),
      contains:name => classes.has(name), toggle(name, active) { active ? classes.add(name) : classes.delete(name); }},
    addEventListener(name, handler) { handlers.set(name, handler); },
    focus() { document.activeElement = node; }};
  elements.set(id, node);
  return node;
}
const pop = element('pop'), hero = element('hero-consult'), menu = element('mnav');
document.activeElement = hero;
vm.runInNewContext(block, {document, vm:element('video'), drawer:element('drawer'), mnav:menu,
  bindLeadForm(){},
  addEventListener(name, handler) { globalHandlers.set(name, handler); },
  setTimeout() { throw Error('Unexpected popup timer'); },
  setInterval() { throw Error('Unexpected recurring popup timer'); }});
assert(!pop.classList.contains('on'), 'Popup stays closed on page load');
assert(!globalHandlers.has('scroll'), 'Scrolling must not open the popup');
hero.handlers.get('click')({target:hero});
assert(pop.classList.contains('on'), 'Explicit CTA opens the popup');
assert.equal(document.body.style.overflow, 'hidden');
element('pop-x').handlers.get('click')();
assert(!pop.classList.contains('on'));
assert.equal(document.body.style.overflow, '');
assert.equal(document.activeElement, hero, 'Close restores focus to the CTA');
hero.handlers.get('click')({target:hero});
assert(pop.classList.contains('on'), 'CTA may reopen the popup');
globalHandlers.get('keydown')({key:'Escape'});
assert(!pop.classList.contains('on'));
menu.classList.add('on');
hero.handlers.get('click')({target:hero});
assert(!pop.classList.contains('on'), 'Popup must not overlap the mobile menu');
console.log('Popup: no timer/scroll triggers; explicit CTA, reopen, close, Escape and menu guard passed.');
