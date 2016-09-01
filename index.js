var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/home', function(req,res){
	res.sendFile(__dirname + '/app/index.html');
});

app.get('/about', function(req, res){
	res.sendFile(__dirname + '/app/about.html');
})
app.get('*', function(req, res){
	res.send('Hello World!');
});

app.listen(3000);

console.log('server running on port 3000');
