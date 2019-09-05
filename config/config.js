require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.db_user,
    password: process.env.db_password,
    database: "take5_db",
    host: process.env.db_host,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.db_password,
    database: "take5_db",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
