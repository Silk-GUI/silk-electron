var fs = require('fs'),
  pathUtil = require('path'),
  exec = require('child_process').exec;

  var packages = [
    './app',
    './browser-window',
    './global-shortcut'
  ];

// symlinks the packages into the node_modules of an electron app
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

// removes the symlinks that were added in addSymlink
function removeSymlink(path) {
  packages.forEach(function(package) {
    var target = pathUtil.resolve(path,'./node_modules', package);
    fs.unlinkSync(target);
  });
}

module.exports = {
  add: addSymlink,
  remove: removeSymlink
};
