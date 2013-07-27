var express = require('express');
var app = express();
var buffer = new Buffer("Mandood!!!!\n  What\'s up dudester?\n--Rob P","utf-8");
//var buffer = fs.readFileSync(index.html);








app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());//'Mandood!!!!\n  What\'s up dudester?\n--Rob P');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
