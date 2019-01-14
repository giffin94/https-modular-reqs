var getHTML = require('../http-functions/html-module.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};

function printLowercase(body) {
    console.log(body.toLowerCase());
}

getHTML(requestOptions, printLowercase);