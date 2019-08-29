'use strict';
module.exports = function(sequelize, Sequalize) {
  var UserSchema = sequelize.define("User", {
      email: Sequalize.STRING,
      password: Sequalize.STRING
  });
  return UserSchema;
}