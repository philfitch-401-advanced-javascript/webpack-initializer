const { writeJson } = require('./writer');

function babelWriter(path) {
  return writeJson({
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }, path
  )
}

module.exports = babelWriter;