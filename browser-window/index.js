// This module does nothing since Silk automatically
// creates windows. It tries to implement all methods
// to prevent errors. We should eventually allow the server
// to apps create their windows.

function BrowserWindow(){
}

BrowserWindow.prototype = {
  setMenu: function () {},
  loadUrl: function () {
    process.send({cmd:"ready"});
  },
  on: function () {}
};

module.exports = BrowserWindow;
