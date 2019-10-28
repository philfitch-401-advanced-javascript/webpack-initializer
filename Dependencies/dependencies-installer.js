const installer = require('./installer');

function dependenciesInstaller(path) {
  return installer(path, `"dependencies": {
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }`, false)
}

module.exports = dependenciesInstaller;