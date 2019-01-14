var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function(response){
        //initialize a variable so we can store our data chunks and display the body - UNIFIED!
        var body = '';

        response.setEncoding('utf-8');
        response.on('data', function(chunk) {
        body += chunk;
        });

        response.on('end', function() {
        callback(body);
        });
    });
}