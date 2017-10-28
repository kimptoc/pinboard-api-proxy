'use strict';

var pinboard = require('./pinboard');

module.exports.main = (event, context, callback) => {

  var queryStringParameters = event.queryStringParameters;
  var queryPath = "";
  for (var key in queryStringParameters) {
    if (queryStringParameters.hasOwnProperty(key)) {
      queryPath += key+"="+queryStringParameters[key];
    }
  }
  if (queryPath.length > 0) queryPath = "?"+queryPath;
  pinboard.call('https://api.pinboard.in'+event.path+queryPath, function(err, statusCodeResult, bodyResult) {

  const response = {
    statusCode: statusCodeResult,
    headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Content-Type":"text/xml; charset=utf-8"

    },
    body: bodyResult
  };

  callback(null, response);
});
};

