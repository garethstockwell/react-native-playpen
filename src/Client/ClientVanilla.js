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

    _objectValues(input) {
        var output = new Array;
        for (var key in input) {
            output.push(input[key]);
        }
        return output;
    }

    /* Return list of all categories.
     *
     * Return type: array<item>, where item is a JSON object representing
     * a group / category.
     */
    getCategoryListNormal(callback) {
        console.log('Client.getCategoryListNormal');
        return this._fetch('/categories/list.json',
                (data => data.Categories), callback);
    }

    /* Return list of all categories.
     *
     * Return type: [dataBlob, sectionIDs, rowIDs]
     *
     * dataBlob is a map: keys are group / category IDs; values are JSON objects
     * representing each group / category.
     *
     * sectionIDs is an array of group IDs.
     *
     * rowIDs is an array of arrays of category IDs.
     */
    getCategoryListSectioned(callback) {
        console.log('Client.getCategoryListSectioned');
        var process = function(response) {
            var inData = response.Categories;

            // Map from CategoryID to index into sectionIDs / rowIDs arrays.
            var map = {};

            var sectionIDs = [];
            var rowIDs = [];

            for (var id in inData) {
                var item = inData[id];
                var parentID = item.ParentCategoryID;

                if (parentID === -1) {
                    map[id] = sectionIDs.length;
                    sectionIDs.push(id);
                    rowIDs.push([]);
                }
            }

            for (var id in inData) {
                var item = inData[id];
                var parentID = item.ParentCategoryID;

                if (parentID !== -1) {
                    var idx = map[parentID];
                    rowIDs[idx].push(id);
                }
            }

            return {
                dataBlob: inData,
                sectionIDs: sectionIDs,
                rowIDs: rowIDs,
            };
        }

        return this._fetch('/categories/list.json',
                (data => process(data)), callback);
    }

    /* Returns a list of all discussions.
     *
     * TODO: pagination.
     */
    getDiscussionList(callback) {
        console.log('Client.getDiscussionList');
        return this._fetch('/discussions/list.json',
                (data => this._objectValues(data.Discussions)), callback);
    }

    /* Returns a list of all discussions in a specified category.
     *
     * TODO: pagination.
     */
    getCategoryDiscussionList(categoryID, page, callback) {
        console.log('Client.getCategoryDiscussionList'
            + ' categoryID '+ categoryID
            + ' page ' + page);
        var url = '/discussions/category.json?CategoryIdentifier=' + categoryID;
        return this._fetch(url,
                (data => {
                    return {
                        page: page,
                        discussions: data.Discussions
                    };
                }), callback);
    }
};

export { ClientVanilla as default };

