System.register(['aurelia-flux', 'aurelia-framework', './plan-action-constants', 'lodash'], function (_export) {
  'use strict';

  var handle, Dispatcher, computedFrom, LogManager, PlanActionConstants, _, logger, PlanStore;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFlux) {
      handle = _aureliaFlux.handle;
      Dispatcher = _aureliaFlux.Dispatcher;
    }, function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      LogManager = _aureliaFramework.LogManager;
    }, function (_planActionConstants) {
      PlanActionConstants = _planActionConstants.PlanActionConstants;
    }, function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      logger = LogManager.getLogger("plan-store");

      PlanStore = (function () {
        _createClass(PlanStore, null, [{
          key: 'inject',
          value: [Dispatcher],
          enumerable: true
        }]);

        function PlanStore(dispatcher) {
          _classCallCheck(this, PlanStore);

          this._plans = [];
          this._currentPlan = null;

          this.dispatcher = dispatcher;
        }

        _createDecoratedClass(PlanStore, [{
          key: 'handleSelectPlan',
          decorators: [handle(PlanActionConstants.SELECT_PLAN)],
          value: function handleSelectPlan(message, visitId) {
            this._currentPlan = _.find(this.plans, function (p) {
              return p.visitId == visitId;
            });
            logger.debug("Setting current plan to: ", this.currentPlan);
            this.dispatcher.dispatch(PlanActionConstants.PLAN_SELECTED, this.currentPlan);
          }
        }, {
          key: 'handleRetrieveProjects',
          decorators: [handle(PlanActionConstants.RETRIEVE_PLANS)],
          value: function handleRetrieveProjects(message, projects) {
            this._plans = projects;
            this.dispatcher.dispatch(PlanActionConstants.PLANS_RETRIEVED, this._plans);
          }
        }, {
          key: 'plans',
          decorators: [computedFrom("_projects")],
          get: function get() {
            return this._plans;
          }
        }, {
          key: 'currentPlan',
          decorators: [computedFrom("_currentPlan")],
          get: function get() {
            return this._currentPlan;
          }
        }]);

        return PlanStore;
      })();

      _export('PlanStore', PlanStore);
    }
  };
});
//# sourceMappingURL=plan-store.js.map