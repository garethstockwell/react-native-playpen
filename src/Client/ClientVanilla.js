/**
 * ClientVanilla
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

class ClientVanilla {
  constructor(enforcer) {
    if (enforcer != singletonEnforcer) {
      throw "Cannot construct singleton";
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new ClientVanilla(singletonEnforcer);
    }
    return this[singleton];
  }

  _fetch(func, callback) {
    let url = URL_API + func
    let resp = fetch(url)
      .then(resp => resp.json())
      .then(resp => callback(resp))
      .catch(e => e)
      .done()
    return resp;
  }

  categoryList(callback) {
    return this._fetch('/categories/list.json', callback);
  }
};

export { ClientVanilla as default };

