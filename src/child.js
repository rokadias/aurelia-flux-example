import {PlanActionConstants} from './plan-action-constants';
import {PlanActionCreators} from './plan-action-creators';
import {PlanStore} from './plan-store';

import {bindable} from 'aurelia-framework';
import {handle, waitFor, Dispatcher} from 'aurelia-flux';

export class Child {

  @bindable plans;

  static inject = [PlanActionCreators, PlanStore, Dispatcher];

  constructor(planActionCreators: PlanActionCreators, planStore: PlanStore, dispatcher: Dispatcher) {
    this.planActionCreators = planActionCreators;
    this.planStore = planStore;
    this.dispatcher = dispatcher;
  }

  activate() {
    return this.planActionCreators.retrievePlans();
  }

  configureRouter(config, router) {

    config.map([
      {route: ['', '/reset'], moduleId: './reset', name: 'reset', nav: false, title: 'Reset'},
      {route: ['plan/:visitId'], moduleId: './grandchild', name: 'grandchild', nav: false, title: 'Grandchild View'}
    ]);

    this.router = router;
  }

  @handle(PlanActionConstants.PLANS_RETRIEVED)
  handlePlansRetrieved(message, projects) {
    this.plans = this.planStore.plans;
  }

}