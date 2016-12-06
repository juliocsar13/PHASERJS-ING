
// Single-language bootloader.
(function() {
  // Application path.
  var appName = location.pathname.match(/\/([-\w]+)(\.jade)?$/);
  appName = appName ? appName[1].replace('-', '/') : 'basic';

  // Only one language.
  var lang = 'es';
  window['BlocklyGamesLanguages'] = [lang];
  window['BlocklyGamesLang'] = lang;

  // Load the language pack.
  var script = document.createElement('script');
  script.src = appName + '/generated/' + lang + '/compressed-indent.js';
  script.type = 'text/javascript';
  document.head.appendChild(script);
})();