/*!
 * Module dependencies.
 */

 var express = require('express')
 var mongoStore = require('connect-mongo')(express)
 var helpers  =require('view helper')
 var pkg = require('../package')
 var flash = require('connect-flash')
 var env = process.env.NODE_ENV || ‘development'

 /**
   * Expose
   */

   //basic auth for staging
   if (env == 'staging') {
   	app.use(express.basicAuth(function(user, pass){
   		return 'username' == user & 'password' == pass
   	}))
   }