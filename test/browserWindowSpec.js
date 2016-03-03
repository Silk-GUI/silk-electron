var expect = require('chai').expect;

var BrowserWindow = require('../browser-window');

describe("BrowserWindow", function () {
  var window;
  beforeEach(function () {
    window = new BrowserWindow();
  });
  describe("methods", function () {
    // make sure these methods exist and run without error
    it("should run setMenu", function () {
      window.setMenu();
    });
    it("should run loadUrl", function () {
      window.loadUrl();
    });
    it("should run on", function () {
      window.on();
    })
  });
});
