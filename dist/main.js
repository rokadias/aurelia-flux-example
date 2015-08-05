System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var LogManager;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-flux');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {

      LogManager.setLevel(LogManager.logLevel.debug);
    }
  };
});
//# sourceMappingURL=main.js.map