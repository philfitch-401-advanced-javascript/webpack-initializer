#!/usr/bin/env node

const packageJsonWriter = require('./Writers/package-json-writer');
const eslintWriter = require('./Writers/eslint-writer');
const babelWriter = require('./Writers/babel-writer');
const webpackWriter = require('./Writers/webpack-writer');
const gitignoreWriter = require('./Writers/gitignore-writer');
const travisWriter = require('./Writers/travis-writer');
const srcIndexWriter = require('./Writers/src-index-writer');

const dependenciesInstaller = require('./Dependencies/dependencies-installer');
const devDependenciesInstaller = require('./Dependencies/dev-dependencies-installer');

packageJsonWriter('./package.json');
eslintWriter('./.eslintrc');
babelWriter('./.babelrc');
webpackWriter('./webpack.config.js');
gitignoreWriter('./.gitignore');
travisWriter('./.travis.yml');
srcIndexWriter('./fakeSrc');

dependenciesInstaller('./');
devDependenciesInstaller('./');
