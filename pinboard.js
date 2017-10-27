'use strict';

var request = require('request');

module.exports.call = (url, callback) => {

  request(url, function (error, response, body) {
  //  console.log('error:', error); // Print the error if one occurred
//    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 //   console.log('body:', body); // Print the HTML for the Google homepage.
    callback(error, response.statusCode, body);
  });

};

