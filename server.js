/**
* Module Dependencies
*/

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/config');

require('express-namespace');
mongoose.connect(config.db);


app.listen(3000);
console.log('Express app has started');
