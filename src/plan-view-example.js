import {PlanActionConstants} from './plan-action-constants';
import {PlanActionCreators} from './plan-action-creators';
import {PlanStore} from './plan-store';
import {bindable, LogManager} from 'aurelia-framework';
import {handle, waitFor, Dispatcher} from 'aurelia-flux';

const logger:Logger = LogManager.getLogger("plan-view-example");

export class ProjectViewExample {

  static inject = [PlanActionCreators, PlanStore, Dispatcher];

  @bindable plan;

  constructor(planActionCreators: PlanActionCreators, planStore: PlanStore, dispatcher: Dispatcher) {
    this.planActionCreators = planActionCreators;
    this.planStore = planStore;
    this.dispatcher = dispatcher;
  }

  ////////////////////////////////////////
  //UI Actions
  ////////////////////////////////////////

  activate(params, config, navigation) {
    logger.debug("activate for visitId", params.visitId);
    return this.planActionCreators.selectPlan(params.visitId);
  }

  deactivate() {
    logger.debug("deactivate");
  }

  ////////////////////////////////////////
  // Async messages from store.
  ////////////////////////////////////////

  @handle(PlanActionConstants.PLAN_SELECTED)
  handlePlanSelected(message, plan) {
    logger.debug("This will only get invoked this one time == bug.", plan);
    this.plan = this.planStore.currentPlan;
  }
}