/**
 * DataVanilla
 *
 * Interface to Vanilla Forums API
 * https://blog.vanillaforums.com/api/
 */

'use strict';

import ApiUtils from './ApiUtils';

var Symbol = require('es6-symbol');

let singleton = Symbol();
let singletonEnforcer = Symbol();

let instance = null;

// We are using this for now because theFB hasn't activated the API
let URL_SITE = 'http://forums.xamarin.com'

let URL_API = URL_SITE + '/api/v1'

class DataVanilla {
  constructor(enforcer) {
    if (enforcer != singletonEnforcer) {
      throw "Cannot construct singleton";
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new DataVanilla(singletonEnforcer);
    }
    return this[singleton];
  }

  _fetch(func) {
    return fetch(URL_API + func)
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .catch(e => e)
  }

  categoryList() {
    return this._fetch('/categories/list')
  }
};

export { DataVanilla as default };

