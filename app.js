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

var server = http.createServer(app);

server.listen(3000)