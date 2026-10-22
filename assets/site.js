(function(){
  /* Generated responsive variants share a URL when their source files are identical. */
  var IMAGE_ASSETS = {"assets/covers/story-recording-clean.png":{"width":941,"height":1672,"src":"assets/media/45534e5e841022-640.webp","srcset":"assets/media/45534e5e841022-320.webp 320w, assets/media/45534e5e841022-640.webp 640w, assets/media/45534e5e841022-941.webp 941w"},"assets/services/01-photo-clean.png":{"width":1448,"height":1086,"src":"assets/media/1b0e1e35c6cb45-640.webp","srcset":"assets/media/1b0e1e35c6cb45-320.webp 320w, assets/media/1b0e1e35c6cb45-640.webp 640w, assets/media/1b0e1e35c6cb45-1280.webp 1280w"},"assets/services/02-video-clean.png":{"width":1448,"height":1086,"src":"assets/media/f49a6fee706e07-640.webp","srcset":"assets/media/f49a6fee706e07-320.webp 320w, assets/media/f49a6fee706e07-640.webp 640w, assets/media/f49a6fee706e07-1280.webp 1280w"},"assets/services/03-reels-clean.png":{"width":1448,"height":1086,"src":"assets/media/1ed98fb1d5928c-640.webp","srcset":"assets/media/1ed98fb1d5928c-320.webp 320w, assets/media/1ed98fb1d5928c-640.webp 640w, assets/media/1ed98fb1d5928c-1280.webp 1280w"},"assets/services/04-ugc-clean.png":{"width":1448,"height":1086,"src":"assets/media/e27f1a1a87cadf-640.webp","srcset":"assets/media/e27f1a1a87cadf-320.webp 320w, assets/media/e27f1a1a87cadf-640.webp 640w, assets/media/e27f1a1a87cadf-1280.webp 1280w"},"assets/services/05-models-clean.png":{"width":1448,"height":1086,"src":"assets/media/c8e8e8aa1126a0-640.webp","srcset":"assets/media/c8e8e8aa1126a0-320.webp 320w, assets/media/c8e8e8aa1126a0-640.webp 640w, assets/media/c8e8e8aa1126a0-1280.webp 1280w"},"assets/services/06-packages-clean.png":{"width":1448,"height":1086,"src":"assets/media/b1b699b3d28052-640.webp","srcset":"assets/media/b1b699b3d28052-320.webp 320w, assets/media/b1b699b3d28052-640.webp 640w, assets/media/b1b699b3d28052-1280.webp 1280w"},"assets/services/07-identity-clean.png":{"width":1448,"height":1086,"src":"assets/media/45059053304ee7-640.webp","srcset":"assets/media/45059053304ee7-320.webp 320w, assets/media/45059053304ee7-640.webp 640w, assets/media/45059053304ee7-1280.webp 1280w"},"assets/services/08-animation-clean.png":{"width":1448,"height":1086,"src":"assets/media/f4c418c0a3f215-640.webp","srcset":"assets/media/f4c418c0a3f215-320.webp 320w, assets/media/f4c418c0a3f215-640.webp 640w, assets/media/f4c418c0a3f215-1280.webp 1280w"},"assets/services/09-smm-clean.png":{"width":1448,"height":1086,"src":"assets/media/f05ab5e72ffc01-640.webp","srcset":"assets/media/f05ab5e72ffc01-320.webp 320w, assets/media/f05ab5e72ffc01-640.webp 640w, assets/media/f05ab5e72ffc01-1280.webp 1280w"},"assets/tasks/task-new-product-clean.png":{"width":1448,"height":1086,"src":"assets/media/1b0e1e35c6cb45-640.webp","srcset":"assets/media/1b0e1e35c6cb45-320.webp 320w, assets/media/1b0e1e35c6cb45-640.webp 640w, assets/media/1b0e1e35c6cb45-1280.webp 1280w"},"assets/tasks/task-new-collection-clean.png":{"width":1024,"height":1536,"src":"assets/media/b90d9db45b9c56-640.webp","srcset":"assets/media/b90d9db45b9c56-320.webp 320w, assets/media/b90d9db45b9c56-640.webp 640w, assets/media/b90d9db45b9c56-1024.webp 1024w"},"assets/tasks/task-advertising-clean.png":{"width":1448,"height":1086,"src":"assets/media/f49a6fee706e07-640.webp","srcset":"assets/media/f49a6fee706e07-320.webp 320w, assets/media/f49a6fee706e07-640.webp 640w, assets/media/f49a6fee706e07-1280.webp 1280w"},"assets/tasks/task-social-content-clean.png":{"width":1448,"height":1086,"src":"assets/media/b1b699b3d28052-640.webp","srcset":"assets/media/b1b699b3d28052-320.webp 320w, assets/media/b1b699b3d28052-640.webp 640w, assets/media/b1b699b3d28052-1280.webp 1280w"},"assets/tasks/task-refresh-visual-clean.png":{"width":1448,"height":1086,"src":"assets/media/45059053304ee7-640.webp","srcset":"assets/media/45059053304ee7-320.webp 320w, assets/media/45059053304ee7-640.webp 640w, assets/media/45059053304ee7-1280.webp 1280w"},"assets/tasks/task-ai-avatar-clean.png":{"width":1536,"height":1024,"src":"assets/media/72ac148af83068-640.webp","srcset":"assets/media/72ac148af83068-320.webp 320w, assets/media/72ac148af83068-640.webp 640w, assets/media/72ac148af83068-1280.webp 1280w"},"assets/tasks/task-social-management-clean.png":{"width":1448,"height":1086,"src":"assets/media/f05ab5e72ffc01-640.webp","srcset":"assets/media/f05ab5e72ffc01-320.webp 320w, assets/media/f05ab5e72ffc01-640.webp 640w, assets/media/f05ab5e72ffc01-1280.webp 1280w"},"assets/tasks/task-animate-image-clean.png":{"width":1448,"height":1086,"src":"assets/media/f4c418c0a3f215-640.webp","srcset":"assets/media/f4c418c0a3f215-320.webp 320w, assets/media/f4c418c0a3f215-640.webp 640w, assets/media/f4c418c0a3f215-1280.webp 1280w"},"assets/tasks/task-marketplace-clean.png":{"width":1536,"height":1024,"src":"assets/media/622d8ba3b9a236-640.webp","srcset":"assets/media/622d8ba3b9a236-320.webp 320w, assets/media/622d8ba3b9a236-640.webp 640w, assets/media/622d8ba3b9a236-1280.webp 1280w"},"assets/tasks/task-reviews-clean.png":{"width":1448,"height":1086,"src":"assets/media/e27f1a1a87cadf-640.webp","srcset":"assets/media/e27f1a1a87cadf-320.webp 320w, assets/media/e27f1a1a87cadf-640.webp 640w, assets/media/e27f1a1a87cadf-1280.webp 1280w"},"assets/tasks/task-seasonal-clean.png":{"width":1536,"height":1024,"src":"assets/media/c3032c269f947c-640.webp","srcset":"assets/media/c3032c269f947c-320.webp 320w, assets/media/c3032c269f947c-640.webp 640w, assets/media/c3032c269f947c-1280.webp 1280w"},"assets/works/01-product-clean.png":{"width":1448,"height":1086,"src":"assets/media/1b0e1e35c6cb45-640.webp","srcset":"assets/media/1b0e1e35c6cb45-320.webp 320w, assets/media/1b0e1e35c6cb45-640.webp 640w, assets/media/1b0e1e35c6cb45-1280.webp 1280w"},"assets/works/02-video-clean.png":{"width":1448,"height":1086,"src":"assets/media/f49a6fee706e07-640.webp","srcset":"assets/media/f49a6fee706e07-320.webp 320w, assets/media/f49a6fee706e07-640.webp 640w, assets/media/f49a6fee706e07-1280.webp 1280w"},"assets/works/03-storyboard-clean.png":{"width":1536,"height":1024,"src":"assets/media/d9442e77cbdf84-640.webp","srcset":"assets/media/d9442e77cbdf84-320.webp 320w, assets/media/d9442e77cbdf84-640.webp 640w, assets/media/d9442e77cbdf84-1280.webp 1280w"},"assets/works/04-campaign-clean.png":{"width":1448,"height":1086,"src":"assets/media/1ed98fb1d5928c-640.webp","srcset":"assets/media/1ed98fb1d5928c-320.webp 320w, assets/media/1ed98fb1d5928c-640.webp 640w, assets/media/1ed98fb1d5928c-1280.webp 1280w"},"assets/works/05-content-package-clean.png":{"width":1448,"height":1086,"src":"assets/media/b1b699b3d28052-640.webp","srcset":"assets/media/b1b699b3d28052-320.webp 320w, assets/media/b1b699b3d28052-640.webp 640w, assets/media/b1b699b3d28052-1280.webp 1280w"},"assets/works/06-identity-clean.png":{"width":1448,"height":1086,"src":"assets/media/45059053304ee7-640.webp","srcset":"assets/media/45059053304ee7-320.webp 320w, assets/media/45059053304ee7-640.webp 640w, assets/media/45059053304ee7-1280.webp 1280w"},"assets/works/07-animation-clean.png":{"width":1448,"height":1086,"src":"assets/media/f4c418c0a3f215-640.webp","srcset":"assets/media/f4c418c0a3f215-320.webp 320w, assets/media/f4c418c0a3f215-640.webp 640w, assets/media/f4c418c0a3f215-1280.webp 1280w"},"assets/works/08-idea-clean.png":{"width":1448,"height":1086,"src":"assets/media/f05ab5e72ffc01-640.webp","srcset":"assets/media/f05ab5e72ffc01-320.webp 320w, assets/media/f05ab5e72ffc01-640.webp 640w, assets/media/f05ab5e72ffc01-1280.webp 1280w"},"assets/works/09-social-clean.png":{"width":1448,"height":1086,"src":"assets/media/e27f1a1a87cadf-640.webp","srcset":"assets/media/e27f1a1a87cadf-320.webp 320w, assets/media/e27f1a1a87cadf-640.webp 640w, assets/media/e27f1a1a87cadf-1280.webp 1280w"},"assets/works/10-process-clean.png":{"width":1536,"height":1024,"src":"assets/media/7cc4af5f5d39b2-640.webp","srcset":"assets/media/7cc4af5f5d39b2-320.webp 320w, assets/media/7cc4af5f5d39b2-640.webp 640w, assets/media/7cc4af5f5d39b2-1280.webp 1280w"},"assets/covers/marina-live.jpg":{"width":1280,"height":720,"src":"assets/media/9b985eeae3263d-640.webp","srcset":"assets/media/9b985eeae3263d-320.webp 320w, assets/media/9b985eeae3263d-640.webp 640w, assets/media/9b985eeae3263d-1280.webp 1280w"},"assets/covers/karina-live.jpg":{"width":1280,"height":720,"src":"assets/media/0d672af38db32e-640.webp","srcset":"assets/media/0d672af38db32e-320.webp 320w, assets/media/0d672af38db32e-640.webp 640w, assets/media/0d672af38db32e-1280.webp 1280w"},"assets/covers/svetlana-live.jpg":{"width":1280,"height":720,"src":"assets/media/c222f3a1836451-640.webp","srcset":"assets/media/c222f3a1836451-320.webp 320w, assets/media/c222f3a1836451-640.webp 640w, assets/media/c222f3a1836451-1280.webp 1280w"},"assets/covers/olga-live.jpg":{"width":1280,"height":720,"src":"assets/media/3c4eba21830460-640.webp","srcset":"assets/media/3c4eba21830460-320.webp 320w, assets/media/3c4eba21830460-640.webp 640w, assets/media/3c4eba21830460-1280.webp 1280w"},"assets/covers/natalya-live.jpg":{"width":1280,"height":720,"src":"assets/media/d8fb4045501ee1-640.webp","srcset":"assets/media/d8fb4045501ee1-320.webp 320w, assets/media/d8fb4045501ee1-640.webp 640w, assets/media/d8fb4045501ee1-1280.webp 1280w"}}; /* RESPONSIVE_IMAGE_MANIFEST */
  function imageAttrs(source, sizes, deferred){
    var image = IMAGE_ASSETS[source], prefix = deferred ? 'data-' : '';
    if(!image) return 'src="' + source + '" loading="lazy" decoding="async"';
    return prefix + 'src="' + image.src + '" ' + prefix + 'srcset="' + image.srcset +
      '" sizes="' + sizes + '" width="' + image.width + '" height="' + image.height +
      '" loading="lazy" decoding="async"';
  }
  function hydrateImages(parent){
    parent.querySelectorAll('img[data-src]').forEach(function(img){
      if(img.dataset.srcset){img.srcset = img.dataset.srcset; delete img.dataset.srcset;}
      img.src = img.dataset.src; delete img.dataset.src;
    });
  }
  /* ---------- данные ---------- */
  var SERVICES = [
    {n:'AI-фотосессии', img:'01-photo-clean.png', ph:'Product',
     q:'Нужна серия фотографий продукта, но не хочется организовывать <em>полноценную съёмку</em>?',
     d:'<strong>Готовая серия изображений продукта</strong> для каталога, рекламы, сайта и социальных сетей.',
     in:['фото для каталога и маркетплейсов','lifestyle-кадры','кампейн-визуалы','креативы для рекламы','готовые файлы в нужных размерах'],
     who:['бренды косметики и ухода','товарный бизнес','маркетплейсы','локальные производители']},
    {n:'Рекламные AI-видео', img:'02-video-clean.png', ph:'Advertising',
     q:'Нужен ролик <em>для запуска или рекламы</em>?',
     d:'<strong>Короткие рекламные видео</strong> и визуальные истории под конкретную задачу бренда.',
     in:['сценарий и раскадровка','сцены и движение','озвучка и субтитры','монтаж под площадку'],
     who:['бренды с рекламными кабинетами','эксперты','онлайн-магазины']},
    {n:'Reels', img:'03-reels-clean.png', ph:'Reels',
     q:'Контент, который должен работать <em>в вертикальном формате</em>?',
     d:'<strong>Готовые вертикальные ролики</strong>: сценарий, визуал и анимация для Reels и Shorts.',
     in:['идея и сценарий','вертикальные визуалы','анимация и переходы','готовые ролики для Reels и Shorts'],
     who:['бренды в соцсетях','эксперты','локальный бизнес']},
    {n:'AI-UGC', img:'04-ugc-clean.png', ph:'Lifestyle',
     q:'Хотите показать продукт так, будто <em>его рекомендует реальный человек</em>?',
     d:'<strong>Естественный UGC-контент</strong> и сценарии для рекламы и социальных сетей.',
     in:['видео-отзывы','распаковки','обзоры продукта','вертикальный формат'],
     who:['бренды в соцсетях','товарный бизнес','маркетплейсы']},
    {n:'Виртуальные модели и персонажи', img:'05-models-clean.png', ph:'Fashion',
     q:'Нужна модель, которая может появляться <em>в десятках разных съёмок</em>?',
     d:'<strong>Постоянное лицо бренда</strong> — виртуальная модель или персонаж в единой стилистике.',
     in:['образ и внешность персонажа','голос','серия кадров','видео с участием персонажа'],
     who:['бренды одежды и косметики','онлайн-школы','эксперты без желания сниматься']},
    {n:'Контент-пакеты', img:'06-packages-clean.png', ph:'Social',
     q:'Нужен не один кадр, а <em>контент на месяц</em> или под конкретный запуск?',
     d:'<strong>Контент на месяц или запуск</strong>: фото, видео, Reels и визуалы в одной системе.',
     in:['контент-план','посты и сторис','Reels','обложки','тексты'],
     who:['малый бизнес','эксперты','салоны и студии']},
    {n:'Айдентика и визуальный стиль', img:'07-identity-clean.png', ph:'Branding',
     q:'Хотите, чтобы бренд выглядел <em>узнаваемо</em>, а не просто красиво?',
     d:'<strong>Узнаваемая визуальная система</strong>: цвета, типографика, графика и правила коммуникации.',
     in:['логотип','цвета и типографика','графические элементы','правила использования','шаблоны'],
     who:['новые бренды','те, кто обновляет стиль']},
    {n:'AI-анимация', img:'08-animation-clean.png', ph:'Animation',
     q:'Есть изображение, которое хочется <em>оживить</em>?',
     d:'<strong>Превращаем статичный визуал в движение</strong>: анимацию, короткую историю или мультфильм.',
     in:['анимация персонажей','моушн-графика','короткие истории','озвучка'],
     who:['детские бренды','образовательные проекты','реклама']},
    {n:'AI-SMM', img:'09-smm-clean.png', ph:'Social',
     q:'Контент нужен <em>регулярно</em>, а не от случая к случаю?',
     d:'<strong>Регулярное производство контента</strong> для социальных сетей без постоянного контроля с вашей стороны.',
     in:['контент-план','производство визуала','тексты','публикации','отчётность по задачам'],
     who:['бизнес без своего SMM','эксперты','салоны и локальные бренды']}
  ];
  var TASKS = [
    {n:'Запустить продукт', q:'Запускаете новый продукт', img:'task-new-product-clean.png', alt:'Запуск нового продукта и распаковка', out:['AI-фотосессия','Reels','Рекламные креативы']},
    {n:'Показать новую коллекцию', q:'Выходит новая коллекция', img:'task-new-collection-clean.png', alt:'Съёмка новой коллекции одежды', out:['Серия визуалов','Виртуальная модель','Контент для соцсетей']},
    {n:'Запустить рекламу', q:'Нужна реклама', img:'task-advertising-clean.png', alt:'Динамичная рекламная кампания продукта', out:['Несколько рекламных концепций','Видео','UGC']},
    {n:'Наполнить соцсети', q:'Соцсети нужно наполнить', img:'task-social-content-clean.png', alt:'Создание серии материалов для социальных сетей', out:['Контент-пакет на месяц']},
    {n:'Обновить стиль бренда', q:'Пора обновить визуал бренда', img:'task-refresh-visual-clean.png', alt:'Обновлённый визуальный стиль бренда', out:['Айдентика','Визуальная система','Контент']},
    {n:'Создать AI-аватара', q:'Нужно постоянное лицо бренда', img:'task-ai-avatar-clean.png', alt:'Виртуальный ведущий для бренда', out:['Виртуальная модель','Серия кадров','Видео с персонажем']},
    {n:'Передать соцсети команде', q:'Соцсети хочется снять с себя', img:'task-social-management-clean.png', alt:'Планирование и ведение социальных сетей', out:['Контент-план','Производство визуала','Публикации']},
    {n:'Оживить готовый визуал', q:'Есть визуал, который хочется оживить', img:'task-animate-image-clean.png', alt:'Анимация статичного изображения продукта', out:['AI-анимация','Короткая история','Озвучка']},
    {n:'Оформить маркетплейс', q:'Нужны карточки для маркетплейса', img:'task-marketplace-clean.png', alt:'Каталожная съёмка товара для маркетплейса', out:['Фото для каталога','Кадры в интерьере','Файлы в нужных размерах']},
    {n:'Получить естественные отзывы', q:'Нужны отзывы, которые не выглядят рекламой', img:'task-reviews-clean.png', alt:'Естественный видеоотзыв о продукте', out:['AI-UGC','Видео-отзывы','Распаковки']},
    {n:'Запустить сезонную кампанию', q:'Впереди сезонная кампания', img:'task-seasonal-clean.png', alt:'Зимняя сезонная рекламная кампания', out:['Рекламные концепции','Серия визуалов','Reels','Баннеры']}
  ];
  var VIDEOS = [
    {id:'v3kZVP_eHZU', name:'Марина', cover:'marina-live.jpg'},
    {id:'QNkdHQvzwi8', name:'Карина', cover:'karina-live.jpg'},
    {id:'mH9OYCNrzuo', name:'Светлана', cover:'svetlana-live.jpg'},
    {id:'-lwIwkqzOPQ', name:'Ольга', cover:'olga-live.jpg'},
    {id:'8Pl7gMs3Io8', name:'Наталья', cover:'natalya-live.jpg'}
  ];
  var CASES = [
    {n:'Продуктовая съёмка',      t:'Парфюм: бутылка, упаковка, сцена',        f:'01-product-clean.png',        w:1448, h:1086, wide:true},
    {n:'Рекламное видео',         t:'Ролик для соцсетей и рекламы',            f:'02-video-clean.png',          w:1448, h:1086},
    {n:'Раскадровка ролика',      t:'Сцены и тайминг рекламного видео',        f:'03-storyboard-clean.png',     w:1536, h:1024},
    {n:'Кампейн-визуал',          t:'Главный кадр рекламной кампании',         f:'04-campaign-clean.png',       w:1448, h:1086},
    {n:'Контент-пакет бренда',    t:'Серия визуалов в одной стилистике',       f:'05-content-package-clean.png',w:1448, h:1086},
    {n:'Айдентика и упаковка',    t:'Цвета, носители, упаковка',               f:'06-identity-clean.png',       w:1448, h:1086},
    {n:'AI-анимация',             t:'Оживление визуала: движение и частицы',   f:'07-animation-clean.png',      w:1448, h:1086},
    {n:'От идеи до контента',     t:'Контент-план, визуальное направление',    f:'08-idea-clean.png',           w:1448, h:1086},
    {n:'Контент для соцсетей',    t:'Фото, видео и нативные сюжеты',           f:'09-social-clean.png',         w:1448, h:1086},
    {n:'Визуальная концепция',    t:'Мудборд и направление для бренда',        f:'10-process-clean.png',        w:1536, h:1024}
  ];

  /* ---------- задачи: выбор ситуации ---------- */
  var tbtns = document.getElementById('tskbtns'), tout = document.getElementById('tskout');
  if(tbtns && tout){
    tbtns.innerHTML = TASKS.map(function(t, i){
      return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '"' + (i === 0 ? ' class="on"' : '') + '>' +
        '<span class="tsk-num">' + String(i + 1).padStart(2, '0') + '</span><span class="tsk-name">' + t.n + '</span>' +
        '<span class="tsk-go" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 16L16 8M10 8h6v6"/></svg></span></button>';
    }).join('');
    var activeTask = -1, taskTouch = null;
    function showTask(i){
      if(i === activeTask) return;
      var t = TASKS[i];
      if(!t) return;
      activeTask = i;
      tout.innerHTML = '<div class="tsk-media"><img ' + imageAttrs('assets/tasks/' + t.img, '(max-width: 720px) calc(100vw - 72px), 480px') + ' alt="' + t.alt + '"></div>' +
        '<div class="tsk-info"><p class="tsk-q">' + t.q + '</p><p class="tsk-kicker">В решении</p>' +
        '<div class="tsk-list">' + t.out.map(function(x){ return '<span>' + x + '</span>'; }).join('') + '</div></div>';
      tbtns.querySelectorAll('button').forEach(function(b){
        var active = +b.dataset.i === i;
        b.classList.toggle('on', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }
    tbtns.addEventListener('click', function(e){
      var b = e.target.closest('button'); if(b) showTask(+b.dataset.i);
    });
    /* Touch selects on release; a drag remains native horizontal/page scrolling. */
    tbtns.addEventListener('pointerdown', function(e){
      if(e.pointerType !== 'touch') return;
      var b = e.target.closest('button');
      taskTouch = e.isPrimary && b ? {id:e.pointerId, button:b, x:e.clientX, y:e.clientY, time:e.timeStamp} : null;
    }, {passive:true});
    tbtns.addEventListener('pointermove', function(e){
      if(taskTouch && e.pointerId === taskTouch.id &&
        Math.hypot(e.clientX - taskTouch.x, e.clientY - taskTouch.y) > 10) taskTouch = null;
    }, {passive:true});
    tbtns.addEventListener('pointercancel', function(){ taskTouch = null; }, {passive:true});
    tbtns.addEventListener('pointerup', function(e){
      var tap = taskTouch;
      taskTouch = null;
      if(tap && e.pointerId === tap.id && e.timeStamp - tap.time < 600 &&
        Math.hypot(e.clientX - tap.x, e.clientY - tap.y) <= 10) showTask(+tap.button.dataset.i);
    }, {passive:true});
    showTask(0);
  }

  /* ---------- аккордеон услуг ---------- */
  var acc = document.getElementById('acc'), h = '';
  SERVICES.forEach(function(s, i){
    var num = ('0' + (i + 1)).slice(-2);
    var panelId = 'service-panel-' + num, triggerId = 'service-trigger-' + num;
    h += '<article class="ac rv">' +
      '<button class="ac-head" type="button" id="' + triggerId + '" aria-expanded="false" aria-controls="' + panelId + '"><span class="ac-num">' + num + '</span>' +
      '<span class="ac-name">' + s.n + '</span>' +
      '<span class="ac-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span>' +
      (s.img ? '<span class="ac-preview" aria-hidden="true"><img ' +
        imageAttrs('assets/services/' + s.img, '(max-width: 1300px) 20vw, 260px', true) + ' alt=""></span>' : '') + '</button>' +
      '<div class="ac-body" id="' + panelId + '" role="region" aria-labelledby="' + triggerId + '"><div class="ac-in"><div class="ac-txt">' +
      '<span class="ac-label">Задача</span><p class="ac-q">' + s.q + '</p>' +
      '<div class="ac-result"><span class="ac-label">Результат</span><p>' + s.d + '</p></div><div class="ac-cols">' +
      '<div><h4>Что входит</h4><ul>' + s.in.map(function(x){return '<li>' + x + '</li>';}).join('') + '</ul></div>' +
      '<div><h4>Кому подходит</h4><ul>' + s.who.map(function(x){return '<li>' + x + '</li>';}).join('') + '</ul></div>' +
      '</div><a class="btn btn-n hero-cta service-cta" href="#contact"><span class="hero-cta-copy"><strong>Обсудить задачу</strong></span><span class="hero-btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 12.5c2.8 1.5 5.8 2.2 9 2.2s6.2-.7 9-2.2"/><path d="M10.5 13.5h3v2h-3z"/></svg></span></a></div>' +
      (s.img
        ? '<img class="ac-shot" ' + imageAttrs('assets/services/' + s.img, '(max-width: 1024px) calc(100vw - 96px), 580px', i !== 0) + ' alt="' + s.n + '">'
        : '<div class="ph" data-ph="' + s.ph + '"></div>') +
      '</div></div></article>';
  });
  acc.innerHTML = h;
  function shut(item){
    if(!item.classList.contains('open')) return;
    var body = item.querySelector('.ac-body');
    clearTimeout(item.tmr);
    body.style.height = body.scrollHeight + 'px';
    void body.offsetHeight;                 /* заставляем браузер зафиксировать высоту */
    body.style.height = '0px';
    item.classList.remove('open');
    item.querySelector('.ac-head').setAttribute('aria-expanded', 'false');
  }
  function open(item){
    hydrateImages(item.querySelector('.ac-body'));
    var body = item.querySelector('.ac-body'), inner = item.querySelector('.ac-in');
    clearTimeout(item.tmr);
    var hh = inner.offsetHeight;
    /* страховка: если измерить не удалось, открываем без анимации, но открываем */
    body.style.height = hh > 0 ? hh + 'px' : 'auto';
    item.classList.add('open');
    item.querySelector('.ac-head').setAttribute('aria-expanded', 'true');
    /* по таймеру, а не по transitionend: событие может не прийти,
       если вкладка была свёрнута или анимации отключены */
    item.tmr = setTimeout(function(){
      if(item.classList.contains('open')) body.style.height = 'auto';
    }, 560);
  }
  acc.addEventListener('click', function(e){
    var trigger = e.target.closest('.ac-head'); if(!trigger) return;
    var item = trigger.closest('.ac'), wasOpen = item.classList.contains('open');
    acc.querySelectorAll('.ac.open').forEach(shut);
    if(!wasOpen) open(item);
  });
  addEventListener('resize', function(){
    acc.querySelectorAll('.ac.open .ac-body').forEach(function(b){ b.style.height = 'auto'; });
  });
  /* первый пункт раскрыт сразу — иначе блок услуг выглядит пустым */
  var first = acc.querySelector('.ac');
  if(first){
    first.classList.add('open');
    first.querySelector('.ac-head').setAttribute('aria-expanded', 'true');
    first.querySelector('.ac-body').style.height = 'auto';
  }

  /* Only fine pointers / keyboard focus hydrate the tilted desktop thumbnails. */
  var servicePreviewMedia = matchMedia('(min-width:721px) and (hover:hover) and (pointer:fine)');
  function showServicePreview(target){
    if(!servicePreviewMedia.matches) return;
    var trigger = target.closest('.ac-head');
    if(!trigger || trigger.closest('.ac').classList.contains('open')) return;
    var preview = trigger.querySelector('.ac-preview');
    if(preview) hydrateImages(preview);
  }
  acc.addEventListener('pointerover', function(e){
    if(e.pointerType === 'mouse') showServicePreview(e.target);
  });
  acc.addEventListener('focusin', function(e){ showServicePreview(e.target); });

  /* ---------- компактная галерея косметической линейки ---------- */
  var accGallery = document.querySelector('.acc-gallery-grid');
  if(accGallery){
    accGallery.addEventListener('click', function(e){
      var selected = e.target.closest('.acc-gallery-frame');
      if(!selected || selected.classList.contains('is-main')) return;
      accGallery.querySelectorAll('.acc-gallery-frame').forEach(function(frame){
        var active = frame === selected;
        frame.classList.toggle('is-main', active);
        frame.setAttribute('aria-pressed', active ? 'true' : 'false');
        frame.querySelector('img').sizes = active ? '(max-width: 720px) 60vw, 360px' : '(max-width: 720px) 28vw, 180px';
      });
    });
  }

  /* ---------- кейсы ---------- */
  var grid = document.getElementById('casegrid'), g = '';
  CASES.forEach(function(c, i){
    g += '<button class="case" data-name="' + c.n +
      '" data-type="' + c.t + '" data-file="' + c.f + '">' +
      '<span class="shot"><img ' + imageAttrs('assets/works/' + c.f, '(max-width: 720px) 88vw, (max-width: 860px) 64vw, 510px') + ' alt="' + c.n + '">' +
      '<span class="case-no">' + String(i + 1).padStart(2, '0') + '</span></span>' +
      '<span class="case-meta"><b>' + c.n + '</b><span>' + c.t + '</span></span></button>';
  });
  grid.innerHTML = g;
  grid.style.setProperty('--case-total', CASES.length);

  var casePrev = document.getElementById('caseprev'),
      caseNext = document.getElementById('casenext'),
      caseCount = document.getElementById('casecount'),
      caseProgress = document.getElementById('caseprogress'),
      caseIndex = 0,
      caseTick = 0;

  function caseStep(){
    var card = grid.querySelector('.case');
    if(!card) return grid.clientWidth;
    var gap = parseFloat(getComputedStyle(grid).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  }
  function updateCaseSlider(){
    var step = caseStep();
    caseIndex = Math.max(0, Math.min(CASES.length - 1, Math.round(grid.scrollLeft / step)));
    caseCount.textContent = String(caseIndex + 1).padStart(2,'0') + ' / ' + String(CASES.length).padStart(2,'0');
    caseProgress.style.transform = 'translateX(' + (caseIndex * 100) + '%)';
    casePrev.disabled = caseIndex === 0;
    caseNext.disabled = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 4;
  }
  function moveCase(direction){
    grid.scrollBy({left:direction * caseStep(), behavior:'smooth'});
  }
  casePrev.addEventListener('click', function(){ moveCase(-1); });
  caseNext.addEventListener('click', function(){ moveCase(1); });
  grid.addEventListener('scroll', function(){
    cancelAnimationFrame(caseTick); caseTick = requestAnimationFrame(updateCaseSlider);
  }, {passive:true});
  grid.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){ e.preventDefault(); moveCase(-1); }
    if(e.key === 'ArrowRight'){ e.preventDefault(); moveCase(1); }
  });
  addEventListener('resize', updateCaseSlider);
  updateCaseSlider();

  var drawer = document.getElementById('drawer'), drback = document.getElementById('drback');
  function openDrawer(name, type, file){
    document.getElementById('dr-name').textContent = name;
    document.getElementById('dr-type').textContent = type;
    var img = document.getElementById('dr-img'), ph = document.getElementById('dr-ph');
    if(file){
      var image = IMAGE_ASSETS['assets/works/' + file];
      img.sizes = '(max-width: 640px) 100vw, 600px';
      img.srcset = image ? image.srcset : '';
      img.src = image ? image.src : 'assets/works/' + file;
      img.decoding = 'async'; img.alt = name; img.hidden = false; ph.hidden = true;
    } else {
      img.hidden = true; ph.hidden = false;
    }
    document.getElementById('dr-note').textContent =
      'Работа студии: показывает, что можно создать с помощью AI. Проекты для конкретных брендов публикуем только с их согласия.';
    drawer.classList.add('on'); drback.classList.add('on');
    drawer.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
  }
  function closeDrawer(){
    drawer.classList.remove('on'); drback.classList.remove('on');
    drawer.setAttribute('aria-hidden','true'); document.body.style.overflow = '';
  }
  grid.addEventListener('click', function(e){
    var c = e.target.closest('.case'); if(c) openDrawer(c.dataset.name, c.dataset.type, c.dataset.file);
  });
  document.getElementById('drx').addEventListener('click', closeDrawer);
  drback.addEventListener('click', closeDrawer);

  /* ---------- видео ---------- */
  function vcard(v, cls){
    return '<button class="vc ' + (cls || '') + '" data-id="' + v.id + '" data-name="' + v.name + '"' +
      ' aria-label="Смотреть историю: ' + v.name + '">' +
      '<img ' + imageAttrs('assets/covers/' + v.cover, '(max-width: 720px) 88vw, (max-width: 1024px) 48vw, 390px') + ' alt="Отзыв: ' + v.name + '"' +
      ' onerror="this.onerror=null;this.srcset=\'\';this.src=\'' + IMAGE_ASSETS['assets/covers/story-recording-clean.png'].src + '\'">' +
      '<span class="vc-play"></span>' +
      '<span class="vc-meta"><b>' + v.name + '</b><span>Участница AI Growth Studio</span></span></button>';
  }
  var videoRail = document.getElementById('vwall');
  videoRail.innerHTML = VIDEOS.map(function(v){ return vcard(v); }).join('');
  document.getElementById('videoprogress-wrap').style.setProperty('--video-total', VIDEOS.length);

  var videoPrev = document.getElementById('videoprev'),
      videoNext = document.getElementById('videonext'),
      videoCount = document.getElementById('videocount'),
      videoProgress = document.getElementById('videoprogress'),
      videoIndex = 0,
      videoTick = 0;
  function videoStep(){
    var card = videoRail.querySelector('.vc');
    if(!card) return videoRail.clientWidth;
    return card.getBoundingClientRect().width + (parseFloat(getComputedStyle(videoRail).gap) || 0);
  }
  function updateVideoSlider(){
    videoIndex = Math.max(0, Math.min(VIDEOS.length - 1, Math.round(videoRail.scrollLeft / videoStep())));
    videoCount.textContent = String(videoIndex + 1).padStart(2,'0') + ' / ' + String(VIDEOS.length).padStart(2,'0');
    videoProgress.style.transform = 'translateX(' + (videoIndex * 100) + '%)';
    videoPrev.disabled = videoIndex === 0;
    videoNext.disabled = videoRail.scrollLeft >= videoRail.scrollWidth - videoRail.clientWidth - 4;
  }
  function moveVideo(direction){
    videoRail.scrollBy({left:direction * videoStep(), behavior:'smooth'});
  }
  videoPrev.addEventListener('click', function(){ moveVideo(-1); });
  videoNext.addEventListener('click', function(){ moveVideo(1); });
  videoRail.addEventListener('scroll', function(){
    cancelAnimationFrame(videoTick); videoTick = requestAnimationFrame(updateVideoSlider);
  }, {passive:true});
  videoRail.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){ e.preventDefault(); moveVideo(-1); }
    if(e.key === 'ArrowRight'){ e.preventDefault(); moveVideo(1); }
  });
  addEventListener('resize', updateVideoSlider);
  updateVideoSlider();

  var vm = document.getElementById('vm'), vmf = document.getElementById('vmframe'),
      vmSound = document.getElementById('vmsound'), muted = true;
  function ytCmd(func){
    try{ vmf.contentWindow.postMessage(JSON.stringify({event:'command', func:func, args:[]}), '*'); }catch(e){}
  }
  function openVideo(id, name){
    muted = true; vmSound.textContent = 'Включить звук';
    vmf.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&mute=1&rel=0&playsinline=1&enablejsapi=1';
    document.getElementById('vmname').textContent = name;
    vm.classList.add('on'); document.body.style.overflow = 'hidden';
  }
  function closeVideo(){ vm.classList.remove('on'); vmf.src = 'about:blank'; document.body.style.overflow = ''; }
  document.addEventListener('click', function(e){
    var c = e.target.closest('.vc'); if(c) openVideo(c.dataset.id, c.dataset.name);
  });
  vmSound.addEventListener('click', function(){
    muted = !muted; ytCmd(muted ? 'mute' : 'unMute');
    vmSound.textContent = muted ? 'Включить звук' : 'Выключить звук';
  });
  document.getElementById('vmx').addEventListener('click', closeVideo);
  vm.addEventListener('click', function(e){ if(e.target === vm) closeVideo(); });
  addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeVideo(); closeDrawer(); }
  });


  /* ---------- шапка и меню ---------- */
  var hdr = document.getElementById('hdr'), headerStuck;
  function updateHeader(){
    if(hdr.classList.contains('menu-open')) return;
    var stuck = scrollY > 10;
    if(stuck !== headerStuck){hdr.classList.toggle('stuck', stuck); headerStuck = stuck;}
  }
  addEventListener('scroll', updateHeader, {passive:true});
  updateHeader();
  var burger = document.getElementById('burger'), mnav = document.getElementById('mnav');
  var mobileMenuMedia = matchMedia('(max-width:860px)'), menuBackground = [], menuScrollY = 0;
  function setMobileMenu(isOpen, restoreFocus){
    if(isOpen && !mobileMenuMedia.matches) return;
    if(isOpen === mnav.classList.contains('on')) return;
    if(isOpen){
      menuScrollY = scrollY;
      document.body.style.setProperty('--menu-scroll-offset', -menuScrollY + 'px');
    }
    burger.classList.toggle('on', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    mnav.hidden = !isOpen;
    mnav.classList.toggle('on', isOpen);
    hdr.classList.toggle('menu-open', isOpen);
    document.documentElement.classList.toggle('menu-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    if(isOpen){
      menuBackground = Array.from(document.body.children).filter(function(el){
        return el !== hdr && el !== mnav && el.tagName !== 'SCRIPT';
      }).map(function(el){
        var state = {el:el, inert:el.inert}; el.inert = true; return state;
      });
      mnav.querySelector('a').focus({preventScroll:true});
    } else {
      menuBackground.forEach(function(state){ state.el.inert = state.inert; });
      menuBackground = [];
      document.body.style.removeProperty('--menu-scroll-offset');
      var scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, menuScrollY);
      document.documentElement.style.scrollBehavior = scrollBehavior;
      if(restoreFocus) burger.focus({preventScroll:true});
    }
  }
  burger.addEventListener('click', function(){ setMobileMenu(!mnav.classList.contains('on'), true); });
  mnav.addEventListener('click', function(e){
    if(e.target.closest('a[href]')) setMobileMenu(false, false);
  });
  hdr.addEventListener('click', function(e){
    if(e.target.closest('a[href]')) setMobileMenu(false, false);
  });
  document.addEventListener('keydown', function(e){
    if(!mnav.classList.contains('on')) return;
    if(e.key === 'Escape'){ e.preventDefault(); setMobileMenu(false, true); return; }
    if(e.key !== 'Tab') return;
    var focusable = Array.from(hdr.querySelectorAll('a[href],button')).concat(Array.from(mnav.querySelectorAll('a[href],button')))
      .filter(function(el){ return !el.disabled && el.getClientRects().length > 0; });
    var firstControl = focusable[0], lastControl = focusable[focusable.length - 1];
    if(e.shiftKey && document.activeElement === firstControl){ e.preventDefault(); lastControl.focus(); }
    else if(!e.shiftKey && document.activeElement === lastControl){ e.preventDefault(); firstControl.focus(); }
  });
  addEventListener('resize', function(){
    if(!mobileMenuMedia.matches) setMobileMenu(false, false);
  });
  var strip = document.getElementById('strip'); strip.innerHTML += strip.innerHTML;

  /* ---------- форма ---------- */
  var form = document.getElementById('form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true,
        name = document.getElementById('i-name'),
        contact = document.getElementById('i-contact');
    document.getElementById('f-name').classList.toggle('err', !name.value.trim());
    if(!name.value.trim()) ok = false;
    /* телеграм или телефон — принимаем и то и другое */
    var bad = contact.value.trim().length < 3;
    document.getElementById('f-contact').classList.toggle('err', bad);
    if(bad) ok = false;
    if(!ok) return;
    form.classList.add('sent'); document.getElementById('ok').classList.add('on');
  });

  /* ---------- логотип: свет за курсором и искры ---------- */
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hm = document.querySelector('.hmark');
  if(hm){
    /* Одинаковые наборы обеспечивают непрерывное движение без скачка на стыке. */
    hm.querySelectorAll('.hvisual-track').forEach(function(track){
      var set = track.querySelector('.hvisual-set');
      if(!set) return;
      var duplicate = set.cloneNode(true);
      duplicate.setAttribute('aria-hidden','true');
      duplicate.querySelectorAll('img').forEach(function(img){img.alt = '';});
      track.appendChild(duplicate);
    });
    hm.classList.add('in');
    var spot = document.createElement('span'); spot.className = 'hm-spot';
    hm.insertBefore(spot, hm.firstChild);

    var sparks = document.createElement('div'); sparks.className = 'hm-sparks', s = '';
    var sparkCount = !reduce && matchMedia('(hover:hover)').matches ? 20 : 0;
    for(var i = 0; i < sparkCount; i++){
      var a = Math.random() * Math.PI * 2,           /* угол */
          rad = 31 + Math.random() * 21,             /* удаление от центра, % */
          x = 50 + Math.cos(a) * rad,
          y = 50 + Math.sin(a) * rad * .96,
          sz = (2 + Math.random() * 3.2).toFixed(1);
      s += '<i class="spark" style="left:' + x.toFixed(1) + '%;top:' + y.toFixed(1) + '%;' +
           '--s:' + sz + 'px;--g:' + (sz * 2.8).toFixed(1) + 'px;' +
           '--d:' + (2.9 + Math.random() * 3).toFixed(2) + 's;' +
           '--dl:' + (Math.random() * 4.5).toFixed(2) + 's"></i>';
    }
    sparks.innerHTML = s; hm.appendChild(sparks);

    if(matchMedia('(hover:hover)').matches && !reduce){
      var hmFrame = 0, hmPointer;
      hm.addEventListener('mousemove', function(e){
        hmPointer = {x:e.clientX,y:e.clientY};
        if(hmFrame) return;
        hmFrame = requestAnimationFrame(function(){
        hmFrame = 0;
        var r = hm.getBoundingClientRect(),
            px = (hmPointer.x - r.left) / r.width,
            py = (hmPointer.y - r.top) / r.height;
        hm.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
        hm.style.setProperty('--my', (py * 100).toFixed(1) + '%');
        hm.style.setProperty('--tilt-x', ((.5 - py) * 6).toFixed(2) + 'deg');
        hm.style.setProperty('--tilt-y', ((px - .5) * 7).toFixed(2) + 'deg');
        /* искры чуть смещаются навстречу курсору — объём без тяжёлых эффектов */
        sparks.style.transform = 'translate(' + ((px - .5) * -18).toFixed(1) + 'px,' +
                                                ((py - .5) * -18).toFixed(1) + 'px)';
        });
      });
      hm.addEventListener('mouseleave', function(){
        cancelAnimationFrame(hmFrame); hmFrame = 0;
        sparks.style.transform = '';
        hm.style.setProperty('--tilt-x','0deg'); hm.style.setProperty('--tilt-y','0deg');
      });
    }
  }

  /* ---------- окно с приглашением на консультацию ---------- */
  var pop = document.getElementById('pop');
  if(pop){
    var popTrigger;
    function showPop(){
      /* не перекрываем видео и панель кейса */
      if(vm.classList.contains('on') || drawer.classList.contains('on') || mnav.classList.contains('on')) return;
      popTrigger = document.activeElement;
      pop.classList.add('on');
      document.body.style.overflow = 'hidden';
      document.getElementById('pop-x').focus();
    }
    function hidePop(){
      pop.classList.remove('on');
      document.body.style.overflow = '';
      if(popTrigger) popTrigger.focus({preventScroll:true});
    }
    var heroConsult = document.getElementById('hero-consult');
    /* Consultation opens only after an explicit button click, never on time or scroll. */
    if(heroConsult) heroConsult.addEventListener('click', showPop);
    document.getElementById('pop-x').addEventListener('click', hidePop);
    pop.addEventListener('click', function(e){ if(e.target === pop) hidePop(); });
    addEventListener('keydown', function(e){
      if(e.key === 'Escape' && pop.classList.contains('on')) hidePop();
    });
    document.getElementById('pop-form').addEventListener('submit', function(e){
      e.preventDefault();
      var good = true,
          nm = document.getElementById('pi-name'), ct = document.getElementById('pi-contact');
      document.getElementById('pf-name').classList.toggle('err', !nm.value.trim());
      if(!nm.value.trim()) good = false;
      var short = ct.value.trim().length < 3;
      document.getElementById('pf-contact').classList.toggle('err', short);
      if(short) good = false;
      if(!good) return;
      document.getElementById('pop-box').classList.add('sent');
      document.getElementById('pop-ok').classList.add('on');
    });
  }

  /* ---------- появление ---------- */
  if('IntersectionObserver' in window){
    var motionObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){entry.target.classList.toggle('motion-paused', !entry.isIntersecting);});
    }, {rootMargin:'100px'});
    document.querySelectorAll('section,.strip,footer').forEach(function(el){motionObserver.observe(el);});
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {threshold:.08, rootMargin:'0px 0px -5% 0px'});
    document.querySelectorAll('.rv').forEach(function(el, i){
      el.style.transitionDelay = (i % 5) * 50 + 'ms'; io.observe(el);
    });
  } else {
    document.querySelectorAll('.rv').forEach(function(el){ el.classList.add('in'); });
  }
  function pauseInactivePage(){document.documentElement.classList.toggle('page-inactive', document.hidden);}
  document.addEventListener('visibilitychange', pauseInactivePage);
  pauseInactivePage();
})();
