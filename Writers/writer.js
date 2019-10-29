const fs = require('fs');

function write(str, path) {
  fs.writeFileSync(path, str)
  console.log(path);
};

function writeJson(obj, path) {
  const str = JSON.stringify(obj, null, 2);
  write(str, path);
};

module.exports = { write, writeJson };