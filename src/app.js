import {PlanActionConstants} from './plan-action-constants';
import {PlanActionCreators} from './plan-action-creators';
import {PlanStore} from './plan-store';

import {bindable} from 'aurelia-framework';
import {handle, waitFor, Dispatcher} from 'aurelia-flux';



export class App {

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
      {route: [''], moduleId: './home', name: 'home', nav: true, title: 'Home'},
      {route: ['child'], moduleId: './child', name: 'child', nav: false, title: 'Child View'}
    ]);

    this.router = router;
  }

  @handle(PlanActionConstants.PLANS_RETRIEVED)
  handlePlansRetrieved(message, projects) {
    this.plans = this.planStore.plans;
  }

}