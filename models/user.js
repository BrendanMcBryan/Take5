module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
    //   allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // eslint-disable-next-line
    last_login: {
      type: DataTypes.DATE
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    favorites: {
      type: DataTypes.JSON
    },

    totalLikes: {
      type: DataTypes.INTEGER
    },
    following: {
      type: DataTypes.JSON
    }
  });
  return User;
};
