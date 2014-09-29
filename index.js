var through2 = require('through2');
var derequrie = require('derequire');

module.exports = function (file, opt1, opt2) {
  var data = '';
  return through2(function (chunk, _, next) {
    data += chunk.toString();
    next();
  }, function (next) {
    next(derequire(data, opt1, opt2));
  });
};
