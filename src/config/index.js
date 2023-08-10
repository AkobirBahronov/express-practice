require('dotenv').config();

module.exports = {
  application: {
    port: process.env.DEV_PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
    password: process.env.DATABASE_PASSWORD,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  },
};
