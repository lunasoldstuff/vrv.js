// THIS IS ALL A TEST!!!

var http = require('http');
var AirbrakeClient = require('airbrake-js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  throw new Error('I am an uncaught exception');
}).listen(8080);

console.log('Server running on port 8080.');

var airbrake = new AirbrakeClient({
  projectId: 207123,
  projectKey: '24a32b2eeff490f83ad507b0417b938d'
});
