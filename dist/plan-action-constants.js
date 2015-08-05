System.register([], function (_export) {
  'use strict';

  var PlanActionConstants;
  return {
    setters: [],
    execute: function () {
      PlanActionConstants = {
        RETRIEVE_PLANS: 'plans.retrieve',
        PLANS_RETRIEVED: 'plans.retrieved',
        SELECT_PLAN: 'plan.select',
        PLAN_SELECTED: 'plan.selected'
      };

      _export('PlanActionConstants', PlanActionConstants);
    }
  };
});
//# sourceMappingURL=plan-action-constants.js.map