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

    categoryListNormal(callback) {
        return this._fetch('/categories/list.json',
                (data => data['Categories']), callback);
    }

    categoryListSectioned(callback) {
        var process = function(input) {
            var inData = input['Categories'];
            var outData = {};

            var sectionIDs = [];
            var rowIDs = [];

            for (var id in inData) {
                var item = inData[id];
                var parentID = item['ParentCategoryID'];

                if (parentID === -1) {
                    console.log('Group ' + id + ' (' + item['Name'] + ')');
                    sectionIDs.push(id);
                    rowIDs[id] = [];
                    outData[id] = item;
                }
            }

            for (var id in inData) {
                var item = inData[id];
                var parentID = item['ParentCategoryID'];

                if (parentID !== -1) {
                    console.log('Category ' + id + ' (' + item['Name'] + ') group ' + parentID);
                    rowIDs[parentID].push(id);
                    outData[parentID + ':' + id] = item;
                }
            }

            return [outData, sectionIDs, rowIDs];
        }

        return this._fetch('/categories/list.json',
                (data => process(data)), callback);
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

