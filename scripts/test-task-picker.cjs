/* Exercise the real task picker handlers without a browser or dependencies. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../assets/site.js'), 'utf8');
const start = source.indexOf("  var tbtns = document.getElementById('tskbtns')");
const end = source.indexOf('  /* ---------- аккордеон услуг ---------- */', start);
assert(start >= 0 && end > start, 'Task picker source section must exist');

const tasks = Array.from({length:3}, (_, i) => ({n:'Task ' + i, q:'Result ' + i,
  img:'task-' + i + '.webp', alt:'Image ' + i, out:['Format ' + i]}));
const handlers = new Map();
const buttons = tasks.map((_, i) => ({
  dataset:{i:String(i)}, active:false, attrs:{},
  closest() { return this; },
  setAttribute(name, value) { this.attrs[name] = value; },
  classList:{toggle(name, value) { buttons[i].active = value; }}
}));
const container = {innerHTML:'', querySelectorAll:() => buttons,
  addEventListener(name, handler) { handlers.set(name, handler); }};
let rendered = '', renders = 0;
const output = {set innerHTML(value) { rendered = value; renders++; }};
vm.runInNewContext(source.slice(start, end), {
  document:{getElementById:id => id === 'tskbtns' ? container : output},
  TASKS:tasks, imageAttrs:() => 'src="test.webp"', tr:value=>value
});
function selected(index) {
  assert(rendered.includes('Result ' + index), 'Correct result must render');
  buttons.forEach((button, i) => {
    assert.equal(button.active, i === index);
    assert.equal(button.attrs['aria-pressed'], String(i === index));
  });
}
function send(type, index, extra = {}) {
  handlers.get(type)({target:buttons[index], pointerType:'touch', pointerId:1,
    isPrimary:true, clientX:20, clientY:20, timeStamp:100, ...extra});
}
selected(0);
send('pointerdown', 1);
send('pointerup', 1, {timeStamp:180});
selected(1); // First touch release updates the result, without needing a click.
assert.equal(renders, 2);
send('click', 1);
assert.equal(renders, 2, 'Compatibility click must not redraw a touch selection');

send('pointerdown', 2);
send('pointermove', 2, {clientX:45});
send('pointermove', 2); // Returning to the starting point is still a swipe.
send('pointerup', 2, {timeStamp:200});
selected(1);
send('pointerdown', 2);
send('pointercancel', 2);
send('pointerup', 2, {timeStamp:200});
selected(1);
send('pointerdown', 2);
send('pointerdown', 2, {pointerId:2, isPrimary:false});
send('pointerup', 2, {timeStamp:200});
selected(1); // Pinch and cancelled scrolling gestures do not select.

send('pointerdown', 2, {pointerType:'mouse'});
send('pointerup', 2, {pointerType:'mouse', timeStamp:200});
selected(1);
send('click', 2, {pointerType:'mouse'});
selected(2);
send('click', 0, {detail:0}); // Native keyboard activation retains its click path.
selected(0);
assert.equal(renders, 4);
console.log('Task picker: first tap, duplicate click, swipe, cancellation, mouse and keyboard passed.');
