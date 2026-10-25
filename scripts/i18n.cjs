const vm = require('node:vm');
const cyrillic = /[\u0400-\u04ff]/;
const normalize = value => value.replace(/\s+/g, ' ').trim();
const escape = value => value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function translate(value, catalog) {
  const key = normalize(value), translated = catalog[key];
  if(translated === undefined) {
    if(cyrillic.test(key)) throw Error('Missing English translation: ' + key);
    return value;
  }
  return value.match(/^\s*/)[0] + escape(translated) + value.match(/\s*$/)[0];
}
function datasets(script) {
  const result = {};
  for(const name of ['SERVICES','TASKS','CASES','VIDEOS']) {
    const declaration = script.match(new RegExp('var '+name+' = \\[([\\s\\S]*?)\\n  \\];'));
    if(!declaration) throw Error('Missing dataset: '+name);
    vm.runInNewContext(declaration[0],result);
  }
  return result;
}
const runtimeLabels = ['В решении','Задача','Результат','Что входит','Кому подходит','Обсудить задачу',
  'Смотреть историю:','Отзыв:','Участница AI Growth Studio','Включить звук','Выключить звук',
  'Закрыть меню','Открыть меню','Отправляем заявку…',
  'Слишком много заявок. Попробуйте через 15 минут или напишите в Telegram.',
  'Не удалось подтвердить доставку. Не отправляйте заявку повторно — свяжитесь с нами в Telegram.',
  'Заявка не отправлена. Попробуйте позже или напишите нам в Telegram.',
  'Работа студии: показывает, что можно создать с помощью AI. Проекты для конкретных брендов публикуем только с их согласия.'];
function runtimeCatalog(script, catalog) {
  const keys = new Set(runtimeLabels);
  function walk(value) {
    if(typeof value === 'string' && cyrillic.test(value)) keys.add(normalize(value));
    else if(Array.isArray(value)) value.forEach(walk);
    else if(value && typeof value === 'object') Object.values(value).forEach(walk);
  }
  walk(datasets(script));
  return Object.fromEntries([...keys].map(key=>{
    if(!catalog[key] || cyrillic.test(catalog[key])) throw Error('Missing runtime English translation: '+key);
    return [key,catalog[key]];
  }));
}
function renderEnglish(html, catalog, localeHash) {
  html = html.replace(/<html lang="ru">/,'<html lang="en">')
    .replace('<link rel="canonical" href="https://svip-web.github.io/ai-growth-studio-site/">',
      '<link rel="canonical" href="https://svip-web.github.io/ai-growth-studio-site/en.html">');
  html = html.replace(/<!--[\s\S]*?-->|<[^>]+>|[^<]+/g, token=>{
    if(token.startsWith('<!--')) return token;
    if(token.startsWith('<')) return token.replace(/\b(alt|title|placeholder|aria-label|content|data-ph)="([^"]*)"/g,
      (_,name,value)=>name+'="'+translate(value,catalog)+'"');
    return translate(token,catalog);
  });
  html = html.replaceAll('class="on" lang="ru" hreflang="ru" aria-current="page"','lang="ru" hreflang="ru"')
    .replaceAll('href="en.html" lang="en" hreflang="en"','href="en.html" class="on" lang="en" hreflang="en" aria-current="page"')
    .replace('<h2>Work <span class="cases-title-accent">','<h2>Work by <span class="cases-title-accent">')
    .replace('<script src="assets/site.js', '<script src="assets/site.en.js?v='+localeHash+'" defer></script>\n<script src="assets/site.js');
  return html;
}
module.exports = {normalize, datasets, runtimeCatalog, renderEnglish};
