var expect = require('chai').expect,
  rewire   = require('rewire'),
  path     = require('path');

process.env.APP_ROOT = path.resolve(__dirname, './test_app');
var app = rewire('../app/');

var events = [];
app.on('ready', function() {
  events.push('ready');
});

describe("app", function() {
  describe("properties", function() {
    it("should have app name", function() {
      expect(app.name).to.equal("test app")
    });
  });
  describe("events", function() {
    it("should emit ready", function(done) {
      if (events.indexOf('ready') > -1) {
        return done();
      }
      app.on('ready', done);
    });
  });
  describe("getAppPath", function () {
    it("should return app path", function () {
      expect(app.getAppPath()).to.equal(process.env.APP_ROOT);
    });
  });
  describe("getPath", function() {
    it("should return home path", function () {
      expect(app.getPath('home')).to.have.length.above(7)
    });
    it("should return appData path", function() {
      expect(app.getPath('appData')).to.have.length.above(5);
    });
    it("should return userData path", function() {
      expect(app.getPath("userData")).to.have.length.above(5);
      expect(app.getPath("userData")).to.have.string('/test app');
    });
    it("should throw when path not supported", function() {
      expect(app.getPath.bind(this, "abc")).to.throw('type not implemented');
    });
    it("should throw when platform not supported", function () {
      var revert = app.__set__('process', {
        platform: 'win',
        env: process.env
      });
      expect(app.getPath.bind(this, "appData")).to.throw(/not\ supported/);
      expect(app.getPath.bind(this, "userData")).to.throw(/not\ supported/);
      revert();
    });
  });
});
