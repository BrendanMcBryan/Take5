module.exports = function(sequelize, DataTypes) {
  var Thing = sequelize.define("Thing", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    thing: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Thing;
};
