var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
 
module.exports = function getHTML (options, callback) {

    var chunkData;
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            chunkData += data
            callback(data);
        });

        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
            console.log('Response stream complete.');
        });
    });
}




