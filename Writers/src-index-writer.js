const { write } = require('./writer');

function srcIndexWriter(path) {
  const js = path + '/index.js';
  const html = path + '/index.html';

  write(`import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';
  
  render(
    <App />,
    document.getElementById('root')
  );`, js)

    write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id=root></div>
    </body>
    </html>`, html)
};

module.exports = srcIndexWriter;