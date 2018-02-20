var getHTML = require('../http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };
  
  function printUpperCase (html) {
    var uppercase = html.toUpperCase()
    console.log(uppercase);
  
  }
  
  getHTML(requestOptions, printUpperCase);