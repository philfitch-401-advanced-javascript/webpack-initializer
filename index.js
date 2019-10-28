const packageJsonWriter = require('./Writers/package-json-writer');
const eslintWriter = require('./Writers/eslint-writer');
const babelWriter = require('./Writers/babel-writer');
const webpackWriter = require('./Writers/webpack-writer');
const gitignoreWriter = require('./Writers/gitignore-writer');
const travisWriter = require('./Writers/travis-writer');
const srcIndexWriter = require('./Writers/src-index-writer');

packageJsonWriter('./fakes/package.json');
eslintWriter('./fakes/.eslintrc');
babelWriter('./fakes/.babelrc');
webpackWriter('./fakes/webpack.config.js');
gitignoreWriter('./fakes/.gitignore');
travisWriter('./fakes/.travis.yml');
srcIndexWriter('./fakes/fakeSrc');

