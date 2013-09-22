
/*!
 * Module dependencies
 */

 var mongoose  = require('mongoose');
 var Schema = mongoose.Schema;
 var userPlugin = require('mongoose-user');


 /**
   * user Schema
   */

   var userSchema = new Schema({
   	name: {type: Stirng, default ''};
   	email: {type: String, default ''};
   	hashed_password: {type: String, default ''};
   	salt: {type: String, default ''};
   	
   })


 /**
   * User PlugIn
   */

   userSchema.plugin(userPlugin, {})




  /**
    * Register
    */

    mongoose.model('User', UserSchema);