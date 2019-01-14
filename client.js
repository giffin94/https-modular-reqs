var https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function(response){
        
        response.setEncoding('utf8');

        response.on('data', function(data){
            console.log('This chunk = ', data, '\n');
        });

        response.on('end', function(data){
            console.log(data, " THAT'S ALL FOLKS");
        });
    }); 
}


//***BELOW is code written when following exercise with personal comment notation***/

//need to require https (built in to node, no need to install)
// var https = require('https');

//setting request options (we will be using example.com and the root path of '/')
// var options = {
    // host: 'example.com',
    // path: '/'
// };

//https.get takes a callback with 1 param - response.
//response is a stream
// https.get(options, function(response) {
    
    //set encoding for 'regular' character (utf-8)
    // response.setEncoding('utf8');

    //callback wait for 'data' from response before being invoked
    // response.on('data', function(data) {
        // console.log('Chunk Received. Length: ', data.length);
    // });

    //callback is invoked finally when all data received
    //response.on 'end'
    // response.on('end', function(){
        // console.log('Response stream complete.');
    // });

// });