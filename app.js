var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* 일단 get으로 요청된 것들은 바로 index.html으로 보여준다. */
app.use('/', function(req, res) {
    res.sendfile('./public/html/index.html');
});

/* 로그인이 필요한 부분을 체크 */

/* URL */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
});

// catch all error handler
app.use(function errorHandler(err, req, res, next) {
    err.status = validator.isNull(err.status) ? 500 : err.status;
    console.log('error on request %d | %s | %s | %d'.error, process.domain.id, req.method, req.url, err.status);
    console.log(err.stack.error);
    err.message = err.status == 500 ? 'Something bad happened. :(' : err.message;
    res.send(err.status, err.message);
});
// error handlers


http.createServer(app).listen(3002, function(){
    console.log('Express server listening on port ' + 3002);
});

module.exports = app;
