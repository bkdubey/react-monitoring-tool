var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use(
  '/api/v2/getString?command=ls',
  proxy({ target: 'http://localhost:8080',
  secure : false,
  changeOrigin: true })
);

