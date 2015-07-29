import {LogManager} from 'aurelia-framework';

LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-flux');

  aurelia.start().then(a => a.setRoot());
}
