const fs = require('fs').promises;

function write(str, path) {
  return fs.writeFile(path, str)
  .then(() => console.log(path));
};

function writeJson(obj, path) {
  const str = JSON.stringify(obj);
  return write(str, path);
};

module.exports = { write, writeJson };