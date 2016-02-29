// This module does nothing since Silk automatically
// creates windows. It tries to implement all methods
// to prevent erros. We should eventually switch
// to apps creating their windows.
console.log('silk-electron/browser-window');

function BrowserWindow(){
  var self = this;
}

BrowserWindow.prototype = {
  setMenu: function () {},
  loadUrl: function () {},
  on: function () {}
}

module.exports = BrowserWindow;
