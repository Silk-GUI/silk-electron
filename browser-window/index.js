// This module does nothing since Silk automatically
// creates windows. It tries to implement all methods
// to prevent errors. We should eventually allow the server
// to apps create their windows.

var send = require('../fork_com.js');
var id = 0;

function BrowserWindow(){
  var self = this;

  self.id = id;
  id += 1;

  send(self.id, 'created');
}

BrowserWindow.prototype = {
  setMenu: function () {},
  loadUrl: function () {
    process.send({cmd:"ready"});
  },
  on: function () {}
};

module.exports = BrowserWindow;
