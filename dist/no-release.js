System.register(['aurelia-flux'], function (_export) {
  'use strict';

  var handle, Dispatcher, NoRelease;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFlux) {
      handle = _aureliaFlux.handle;
      Dispatcher = _aureliaFlux.Dispatcher;
    }],
    execute: function () {
      NoRelease = (function () {
        _createClass(NoRelease, null, [{
          key: 'inject',
          value: [Dispatcher],
          enumerable: true
        }]);

        function NoRelease(dispatcher) {
          _classCallCheck(this, NoRelease);

          this.dispatcher = dispatcher;

          var release = this.dispatcher.handle('example.message', function () {
            console.log("here");
          });

          console.log("release is: ", release);
        }

        return NoRelease;
      })();

      _export('NoRelease', NoRelease);
    }
  };
});
//# sourceMappingURL=no-release.js.map