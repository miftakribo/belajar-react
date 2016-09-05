var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/dev'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
	extended: true
}));

app.get('/home', function(req,res){
	res.sendFile(__dirname + '/dev/home.html');
});

app.get('/about', function(req, res){
	res.sendFile(__dirname + '/dev/about.html');
});

app.get('/comment-page', function(req, res){
	res.sendFile(__dirname + '/dev/comment-page.html');
});

// api comment

var data = [
	{id: 1, author: "Pete Hunt 2", text: "this is one comment"},
	{id: 2, author: "Jordan Walke 2", text: "this is *another* comment"},
];

app.get('/api/comments', function(req, res){
	res.json(data);
});

app.post('/api/add-comment', function(sReq, sRes){
	var counter = data.length + 1;
	var arr = {id: counter, author: sReq.body.author, text: sReq.body.text}
	data.push(arr);
})

app.get('*', function(req, res){
	res.send('Hello World!');
});

app.listen(3000);

console.log('server running on port 3000');
