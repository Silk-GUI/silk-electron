var EventEmitter = require("events").EventEmitter,
    fs = require('fs'),
    path = require('path');


function App() {
  var self = this;

  // get app name
  console.log(require.main.fileName);
  var _path = path.resolve(require.main.filename, '../package.json');
  console.log(_path);
  self.packageJson = require(_path);
  self.name = self.packageJson.name;

  process.nextTick(function() {
    self.emit('ready');
  });
}


App.prototype = Object.create(EventEmitter.prototype);
App.prototype.constructor = App;


//TODO: add location in Silk for apps to store their
// settings
App.prototype.getPath = function(type) {

/* Docs from electron

### `app.getPath(name)`

* `name` String

Retrieves a path to a special directory or file associated with `name`. On
failure an `Error` is thrown.

You can request the following paths by the name:

* `home` User's home directory.
* `appData` Per-user application data directory, which by default points to:
  * `%APPDATA%` on Windows
  * `$XDG_CONFIG_HOME` or `~/.config` on Linux
  * `~/Library/Application Support` on OS X
* `userData` The directory for storing your app's configuration files, which by
  default it is the `appData` directory appended with your app's name.
* `temp` Temporary directory.
* `exe` The current executable file.
* `module` The `libchromiumcontent` library.
* `desktop` The current user's Desktop directory.
* `documents` Directory for a user's "My Documents".
* `downloads` Directory for a user's downloads.
* `music` Directory for a user's music.
* `pictures` Directory for a user's pictures.
* `videos` Directory for a user's videos.
*/
  var self = this;
  var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  var platform = process.platform;
  if (type === 'appData') {
      if(platform === 'darwin') {
        //TODO: this should be a folder in ~/.silk-gui
        return home + '/Library/Application Support';
      } else {
        throw new Error('getPath("appData") is not supported for your os');
      }
  } else if (type === 'userData') {
    if(platform === 'darwin') {
      return self.getPath('appData') + self.name;
    }
  }
  throw new Error('type not implemented');
}

module.exports = new App();
