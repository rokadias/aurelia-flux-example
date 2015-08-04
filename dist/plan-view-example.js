System.register(['./plan-action-constants', './plan-action-creators', './plan-store', 'aurelia-framework', 'aurelia-flux'], function (_export) {
  'use strict';

  var PlanActionConstants, PlanActionCreators, PlanStore, bindable, LogManager, handle, waitFor, Dispatcher, logger, PlanViewExample;

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
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaFlux) {
      handle = _aureliaFlux.handle;
      waitFor = _aureliaFlux.waitFor;
      Dispatcher = _aureliaFlux.Dispatcher;
    }],
    execute: function () {
      logger = LogManager.getLogger("plan-view-example");

      PlanViewExample = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(PlanViewExample, [{
          key: 'plan',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], [{
          key: 'inject',
          value: [PlanActionCreators, PlanStore, Dispatcher],
          enumerable: true
        }], _instanceInitializers);

        function PlanViewExample(planActionCreators, planStore, dispatcher) {
          _classCallCheck(this, PlanViewExample);

          _defineDecoratedPropertyDescriptor(this, 'plan', _instanceInitializers);

          this.planActionCreators = planActionCreators;
          this.planStore = planStore;
          this.dispatcher = dispatcher;
        }

        _createDecoratedClass(PlanViewExample, [{
          key: 'activate',
          value: function activate(params, config, navigation) {
            logger.debug("activate for visitId", params.visitId);
            return this.planActionCreators.selectPlan(params.visitId);
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            logger.debug("deactivate");
          }
        }, {
          key: 'handlePlanSelected',
          decorators: [handle(PlanActionConstants.PLAN_SELECTED)],
          value: function handlePlanSelected(message, plan) {
            logger.debug("This will only get invoked this one time == bug.", plan);
            this.plan = this.planStore.currentPlan;
          }
        }], null, _instanceInitializers);

        return PlanViewExample;
      })();

      _export('PlanViewExample', PlanViewExample);
    }
  };
});
//# sourceMappingURL=plan-view-example.js.map