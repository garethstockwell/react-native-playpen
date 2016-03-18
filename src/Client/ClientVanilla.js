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

    _fetch(url, process, callback) {
        var request = new Request();
        request.url = URL_API + url;
        let resp = fetch(request)
            .then(resp => resp.json())
            .then(resp => process(resp))
            .then(resp => callback(resp))
            .catch(e => e)
            .done()
        return resp;
    }

    categoryList(callback) {
        return this._fetch('/categories/list.json',
                (data => data['Categories']), callback);
    }

    discussionList(callback) {
        return this._fetch('/discussions/list.json',
                (data => data['Discussions']), callback);
    }

    categoryDiscussionList(categoryID, callback) {
        var url = '/discussions/category.json?CategoryIdentifier=' + categoryID;
        return this._fetch(url,
                (data => data['Discussions']), callback);
    }
};

export { ClientVanilla as default };

