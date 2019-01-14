var getHTML = require('../http-functions/html-module.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

function printUppercase(body) {
    console.log(body.toUpperCase());
}

getHTML(requestOptions, printUppercase);