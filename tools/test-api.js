#!/usr/bin/env node

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

var SERVER = 'http://forums.xamarin.com/api/v1/';


//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

var Client = require('node-rest-client').Client;


//------------------------------------------------------------------------------
// Functions
//------------------------------------------------------------------------------

var fetch = function (api, process) {
    var client = new Client();
    client.get(SERVER + api, function (data, response) {
        //console.log('Raw');
        //console.log(data);
        processed = process(data);
        console.log('\nProcessed');
        console.log(processed);
    });
}

var categoryList = function () {
    var process = function(input) {
        var inData = input['Categories'];
        var outData = {};

        var sectionIds = [];
        var rowIds = [];

        for (var id in inData) {
            var item = inData[id];
            var parentId = item['ParentCategoryID'];

            if (parentId === -1) {
                console.log('Found category ' + id);
                sectionIds.push(id);
                rowIds[id] = [];
                outData[id] = item;
            }
        }

        for (var id in inData) {
            var item = inData[id];
            var parentId = item['ParentCategoryID'];

            if (parentId !== -1) {
                console.log('Item ' + id + ' is in category ' + parentId)
                rowIds[parentId].push(id);
                outData[parentId + ':' + id] = item;
            }
        }

        return [outData, sectionIds, rowIds];
    }

    fetch('categories/list.json', process);
}

var discussionList = function () {
    fetch('discussions/list.json', (data => data['Discussions']));
}

var commentList = function (discussionID) {
    fetch('comments/list.json',
        (data => data));
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

//categoryList();
discussionList();
//commentList(62966);

