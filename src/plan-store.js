import {handle, Dispatcher} from 'aurelia-flux';
import {computedFrom, LogManager} from 'aurelia-framework';
import {PlanActionConstants} from './plan-action-constants';
import _ from 'lodash';

const logger:Logger = LogManager.getLogger('plan-store');

/**
 * A store which contains all the accessors necessary to read Projects. As with all stores,
 * this store is read only.
 */
export class PlanStore {

  _plans = [];

  /**
   * Keeps track of the currently viewed plan.
   * @type {null}
   * @private
   */
  _currentPlan = null;

  static inject = [Dispatcher];

  constructor(dispatcher:Dispatcher) {
    this.dispatcher = dispatcher;
  }

  @computedFrom('_projects')
  get plans() {
    return this._plans;
  }

  @computedFrom('_currentPlan')
  get currentPlan() {
    return this._currentPlan;
  }

  @handle(PlanActionConstants.SELECT_PLAN)
  handleSelectPlan(message, visitId) {
    this._currentPlan = _.find(this.plans, p => p.visitId == visitId);
    logger.debug('Received event: ', message);
    this.dispatcher.dispatch(PlanActionConstants.PLAN_SELECTED, this.currentPlan);
    logger.debug('Sent event: ', PlanActionConstants.PLAN_SELECTED);
  }


  @handle(PlanActionConstants.RETRIEVE_PLANS)
  handleRetrieveProjects(message, projects) {
    logger.debug('Received event: ', message);
    this._plans = projects;
    this.dispatcher.dispatch(PlanActionConstants.PLANS_RETRIEVED, this._plans);
    logger.debug('Sent event: ', PlanActionConstants.PLANS_RETRIEVED);
  }

}