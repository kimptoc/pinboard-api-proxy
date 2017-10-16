'use strict';

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
    //  message: 'GoGoGo Serverless v1.0! Your function executed successfully!',
      message: helloHello(event), 
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

function helloHello(event) {
  console.log(JSON.stringify(event));
  return "Howdy Hello Hello Hello!!"
}
