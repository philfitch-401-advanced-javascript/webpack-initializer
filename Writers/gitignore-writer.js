const { write } = require('./writer');

function gitignoreWriter(path) {
  return write(`node_modules
  .env`, path
  )
}

module.exports = gitignoreWriter;