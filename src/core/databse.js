const mongoose = require('mongoose');
const { database } = require('../config/index');
const {
  callbackDatabase,
  callbackDatabaseError,
} = require('../config/callback');

const connection = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(
      database.url.replace('<password>', database.password),
      database.options
    )
    .then(() => console.log(callbackDatabase()))
    .catch((err) => console.error(callbackDatabaseError(err)));
};

module.exports = connection;
