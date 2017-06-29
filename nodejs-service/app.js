var http = require('http');
var express = require('express');
var app = express();
app.set('PORT', process.env.PORT || 3000);

var server = http.createServer(app);
app.use(express.static(__dirname));

app.get('/name',function(request, response){
  response.status(200).send("Zete");
})

server.listen(app.get('PORT'));
console.log("server is running");
console.log("Server Port: " + app.get('PORT'));