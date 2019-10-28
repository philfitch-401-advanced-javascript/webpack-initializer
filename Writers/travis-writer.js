const { write } = require('./writer');

function travisWriter(path) {
  return write(`language: node_js
  node_js: node
  jobs:
    include:
      - stage: Update Canvas
        script: node canvas-due-dates.js
  `, path
  )
}

module.exports = travisWriter;