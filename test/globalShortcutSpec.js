var expect = require('chai').expect;

var globalShortcut = require('../global-shortcut');

describe("Global Shortcut", function () {
  // make sure required methods exist and do not error
  it("should run register", function () {
    globalShortcut.register();
  });
});
