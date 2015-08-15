"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    name: DataTypes.STRING(255),
    age:DataTypes.INTEGER,
    phone:DataTypes.INTEGER(11),
    DOB:DataTypes.DATEONLY()
  }, {
    classMethods: {
      // associate: function(models) {
      //   User.hasMany(models.Task)
      // }
    }
  });

  return Person;
};
