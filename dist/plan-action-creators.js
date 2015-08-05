System.register(['aurelia-framework', 'aurelia-flux', './plan-action-constants'], function (_export) {
  'use strict';

  var LogManager, handle, Dispatcher, PlanActionConstants, logger, PlanActionCreators;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaFlux) {
      handle = _aureliaFlux.handle;
      Dispatcher = _aureliaFlux.Dispatcher;
    }, function (_planActionConstants) {
      PlanActionConstants = _planActionConstants.PlanActionConstants;
    }],
    execute: function () {
      logger = LogManager.getLogger("plan-action-creators");

      PlanActionCreators = (function () {
        _createClass(PlanActionCreators, null, [{
          key: 'inject',
          value: [Dispatcher],
          enumerable: true
        }]);

        function PlanActionCreators(dispatcher) {
          _classCallCheck(this, PlanActionCreators);

          this.dispatcher = dispatcher;
        }

        _createClass(PlanActionCreators, [{
          key: 'retrievePlans',
          value: function retrievePlans() {
            var plans = [{ visitId: 1111 }, { visitId: 2222 }, { visitId: 3333 }];
            this.dispatcher.dispatch(PlanActionConstants.RETRIEVE_PLANS, plans);
          }
        }, {
          key: 'selectPlan',
          value: function selectPlan(visitId) {
            logger.debug("Selecting plan with visitId", visitId);

            this.dispatcher.dispatch(PlanActionConstants.SELECT_PLAN, visitId);
          }
        }]);

        return PlanActionCreators;
      })();

      _export('PlanActionCreators', PlanActionCreators);
    }
  };
});
//# sourceMappingURL=plan-action-creators.js.map