var getHTML = require('../http-functions/html-module.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

function printReverse(body) {
    console.log(body.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);