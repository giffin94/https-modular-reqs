var getHTML = require('../http-functions/html-module.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/1337.html'
};

function print1337(body) {

    var l337 = body.replace(/you/gi, 'j00');
    l337 = l337.replace(/ck/gi, 'x');
    l337 = l337.replace(/er/gi, '0r');
    l337 = l337.replace(/a/gi, '4');
    l337 = l337.replace(/e/gi, '3');
    l337 = l337.replace(/l/gi, '1');
    l337 = l337.replace(/o/gi, '0');
    l337 = l337.replace(/s/gi, '5');
    l337 = l337.replace(/t/gi, '7');

    console.log(l337);
}

getHTML(requestOptions, print1337);
