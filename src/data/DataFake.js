/**
 * DataFake
 *
 * Mock implementation of Vanilla Forums API
 *
 */

'use strict';

var Symbol = require('es6-symbol');

let singleton = Symbol();
let singletonEnforcer = Symbol();

let instance = null;

class DataFake {
  constructor(enforcer) {
    if (enforcer != singletonEnforcer) {
      throw "Cannot construct singleton";
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new DataFake(singletonEnforcer);
    }
    return this[singleton];
  }
};

export { DataFake as default };

