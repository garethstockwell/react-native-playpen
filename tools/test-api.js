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
    var process = function (data) {
        var input = data['Categories'];
        var output = [];

        for (var key in input) {
            var inval = input[key];
            var outval = {
                Name: inval['Name'],
                CountDiscussions: inval['CountAllDiscussions'],
            };
            output.push(outval);
        }

        return output;
    }

    fetch('categories/list.json', process);
}

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

categoryList();
