var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);


app.get('/', function (req, res) {
  res.send('MiniGame Server...');
});

var port = process.env.PORT||5000;

server.listen(port, function() {
  console.log('Listening on ' + server.address().port);
});