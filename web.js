var express = require('express');
var fs = require('fs');
var app = express();
var indexContent = fs.readFileSync('index.html');
console.log(indexContent.toString());

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(indexContent.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
