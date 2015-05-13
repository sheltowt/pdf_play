var application_root = __dirname,
	express = require("express"),
	path = require("path"),
	http = require("http"),
	Promise = require("bluebird"),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	url = require('url')

var app = express();

var api_root = "/api/phantom/v1"

app.get(api_root+'/organizations', function (req, res) {

})

app.post(api_root+'/organizations', function (req, res) {

})

app.put(api_root+'/organizations', function (req, res) {

})

app.delete(api_root+'/organizations/', function (req, res) {

})

app.get(api_root+"/pdf/:id", function (req, res) {
	
})

var server = http.createServer(app);

server.listen(3000)