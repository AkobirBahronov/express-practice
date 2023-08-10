module.exports = {
  callbackServer: (port) => 'Server is running on ' + port,
  callbackDatabase: () => 'Database is running',
  callbackDatabaseError: (msg) => 'Database connection error: ' + msg,
  callbackSuccessJson: (res, msg) => {
    return new Object({ message: 'Successfully ' + msg, data: res });
  },
  callbackErrorJson: (res, msg) => {
    return new Object({ message: 'Error: ' + msg, data: res });
  },
};
