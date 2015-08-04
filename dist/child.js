System.register(['./plan-action-constants', './plan-action-creators', './plan-store', 'aurelia-framework', 'aurelia-flux'], function (_export) {
  'use strict';

  var PlanActionConstants, PlanActionCreators, PlanStore, bindable, handle, waitFor, Dispatcher, Child;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_planActionConstants) {
      PlanActionConstants = _planActionConstants.PlanActionConstants;
    }, function (_planActionCreators) {
      PlanActionCreators = _planActionCreators.PlanActionCreators;
    }, function (_planStore) {
      PlanStore = _planStore.PlanStore;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaFlux) {
      handle = _aureliaFlux.handle;
      waitFor = _aureliaFlux.waitFor;
      Dispatcher = _aureliaFlux.Dispatcher;
    }],
    execute: function () {
      Child = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Child, [{
          key: 'plans',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], [{
          key: 'inject',
          value: [PlanActionCreators, PlanStore, Dispatcher],
          enumerable: true
        }], _instanceInitializers);

        function Child(planActionCreators, planStore, dispatcher) {
          _classCallCheck(this, Child);

          _defineDecoratedPropertyDescriptor(this, 'plans', _instanceInitializers);

          this.planActionCreators = planActionCreators;
          this.planStore = planStore;
          this.dispatcher = dispatcher;
        }

        _createDecoratedClass(Child, [{
          key: 'activate',
          value: function activate() {
            return this.planActionCreators.retrievePlans();
          }
        }, {
          key: 'configureRouter',
          value: function configureRouter(config, router) {

            config.map([{ route: ['', '/reset'], moduleId: './reset', name: 'reset', nav: false, title: 'Reset' }, { route: ['plan/:visitId'], moduleId: './grandchild', name: 'grandchild', nav: false, title: 'Grandchild View' }]);

            this.router = router;
          }
        }, {
          key: 'handlePlansRetrieved',
          decorators: [handle(PlanActionConstants.PLANS_RETRIEVED)],
          value: function handlePlansRetrieved(message, projects) {
            this.plans = this.planStore.plans;
          }
        }], null, _instanceInitializers);

        return Child;
      })();

      _export('Child', Child);
    }
  };
});
//# sourceMappingURL=child.js.map