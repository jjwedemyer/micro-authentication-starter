/*// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model(
  'User',
  new Schema({ username: String, password: String, token: String }),
  'User'
);
*/

// this shall model a user account
class User {
	constructor(username,password,token){
		this.username = username;
		this.password = password;
		this.token = token;
	}
	function find() {
		db.auth.findOne({
			username: this.username
		}).then(
		result => {
			return result;
		}).catch(err => {
			throw err;
		});
	}
}