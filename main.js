var fs = require('fs'),
  pathUtil = require('path'),
  exec = require('child_process').exec;

function addSymlink(path) {
  var packages = [
    './app',
    './browser-window',
    './global-shortcut'
  ];
  packages.forEach(function(package) {
    var target = pathUtil.resolve(path, package);
    fs.symlinkSync( pathUtil.resolve(__dirname, package), target, 'dir');
  });
}

function removeSymlink(path) {

}

