const installer = require('./installer');

function dependenciesInstaller(path) {
  installer(path, [
    'react', 
    'react-dom'
  ], false)
}

module.exports = dependenciesInstaller;