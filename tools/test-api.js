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
        console.log('Raw');
        console.log(data);
        processed = process(data);
        console.log('\nProcessed');
        console.log(processed);
    });
}

var categoryList = function () {
    fetch('categories/list.json', (data => data['Categories']));
}

var discussionList = function () {
    fetch('discussions/list.json', (data => data['Discussions']));
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

//categoryList();
discussionList();
