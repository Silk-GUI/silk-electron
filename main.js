var fs = require('fs'),
  pathUtil = require('path'),
  exec = require('child_process').exec;

  var packages = [
    './app',
    './browser-window',
    './global-shortcut'
  ];

function addSymlink(path) {

  packages.forEach(function(package) {
    var target = pathUtil.resolve(path,'./node_modules', package);
    if(! fs.existsSync(pathUtil.resolve(path, './node_modules'))) {
      fs.mkdirSync(pathUtil.resolve(path, './node_modules'));
    }
    try {
    fs.symlinkSync( pathUtil.resolve(__dirname, package), target, 'dir');
  } catch (e) {
    if(e.code !== 'EEXIST') {
      throw e;
    }
  }
  });
}

function removeSymlink(path) {
  packages.forEach(function(package) {
    var target = pathUtil.resolve(path,'./node_modules', package);
    console.log(target);
    fs.unlinkSync(target);
  });
}

module.exports = {
  add: addSymlink,
  remove: removeSymlink
};
