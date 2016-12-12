
// Single-language bootloader.
(function() {
  // Application path.
  var appName = location.pathname.match(/\/([-\w]+)(\.jade)?$/);
  appName = appName ? appName[1].replace('-', '/') : 'index';

  // Only one language.
  var lang = 'es';
  window['BlocklyGamesLanguages'] = [lang];
  window['BlocklyGamesLang'] = lang;

  // Load the language pack.
  var script = document.createElement('script');
  script.src = appName + '/public/javascripts/codefun/maze/generated/' + lang + '/compressed-indent.js';
  script.src = appName + '/public/javascripts/codefun/pond/duck/generated/' + lang + '/compressed-indent.js';
  script.src = appName + '/public/javascripts/codefun/pond/tutor/generated/' + lang + '/compressed-indent.js';

  script.type = 'text/javascript';
  document.head.appendChild(script);
})();
