import {handle, Dispatcher} from 'aurelia-flux';

export class NoRelease {

  static inject = [Dispatcher];

  constructor(dispatcher) {
    this.dispatcher = dispatcher;

    let release = this.dispatcher.handle('example.message', () => {console.log("here")});

    console.log("release is: ", release);
  }
}