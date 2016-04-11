var app = require('./app');

/**
 *
 * @param data {Object}
 */
function sendWindowEvent(window, name, value) {
  var appPath = app.getAppPath();
  var data = {
    cmd: 'electron',
    app: appPath,
    window: window,
    name: name,
    value: value
  };
  process.send(data);
}

module.exports = sendWindowEvent;
