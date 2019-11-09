var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  console.log('/');
  return res.render('index');
});
	
app.get('/about', function(req, res) {
  console.log('/about');
  return res.render('about');
});

app.get('/officeSpace', function(req, res) {
  console.log('/officeSpace');
  return res.render('officeSpace');
});

app.get('/thingsToDo', function(req, res) {
  console.log('/thingsToDo');
  return res.render('thingsToDo');
});

app.get('/memorial', function(req, res) {
  console.log('/memorial');
  return res.render('memorial');
});

app.get('/media', function(req, res) {
  console.log('/media');
  return res.render('media');
});

app.get('/streetArt', function(req, res) {
  console.log('/streetArt');
  return res.render('streetArt');
});		
	
app.listen(3000, function(){
  console.log("Listening on port: 3000");
});
