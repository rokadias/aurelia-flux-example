import {LogManager} from 'aurelia-framework';
import {handle, Dispatcher} from 'aurelia-flux';
import {PlanActionConstants} from './plan-action-constants';

const logger:Logger = LogManager.getLogger("plan-action-creators");

/**
 * Contains methods for interacting with the system.
 */
export class PlanActionCreators {

  static inject = [Dispatcher];

  constructor(dispatcher: Dispatcher) {
    this.dispatcher = dispatcher;
  }

  /**
   * Retrieves all plans (which the user has access to).
   */
  retrievePlans() {
    //mocked for demo
    let plans = [{visitId:1111},{visitId:2222},{visitId:3333}];
    this.dispatcher.dispatch(PlanActionConstants.RETRIEVE_PLANS, plans);
  }

  /**
   * Will set the currently selected plan's visit id.
   *
   * @param visitId
   */
  selectPlan(visitId) {
    //don't need to go to the server for this.
    logger.debug("Selecting plan with visitId", visitId);

    this.dispatcher.dispatch(PlanActionConstants.SELECT_PLAN, visitId);
  }
}