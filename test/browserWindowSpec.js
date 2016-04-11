var expect = require('chai').expect,
    rewire = require('rewire');

var BrowserWindow = rewire('../browser-window');

describe("BrowserWindow", function () {
  var window;
  beforeEach(function () {
    process.send = function () {};
    window = new BrowserWindow();
  });
  describe("methods", function () {
    // make sure these methods exist and run without error
    it("should run setMenu", function () {
      window.setMenu();
    });

    it("should run loadUrl and call process.send", function (done) {
      var revert = BrowserWindow.__set__('process', {
        send: function (message) {
          if(message.cmd === "ready") {
            done();
          }
        }
      });
      window.loadUrl();
    });

    it("should run on", function () {
      window.on();
    })
  });
});
