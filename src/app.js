const { callbackServer } = require('./config/callback');
const config = require('./config/index');
const connection = require('./core/database');
const server = require('./server');

const PORT = config.application.port || 3000;

(async function () {
  try {
    connection();
    server.listen(PORT, () => {
      console.log(callbackServer(PORT));
    });
  } catch (err) {
    console.log(err);
  }
})();
