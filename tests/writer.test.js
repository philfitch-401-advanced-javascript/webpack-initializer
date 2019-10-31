
import { write, writeJson } from '../Writers/writer';
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('writer', () => {
  it('writes files', () => {
    const string = 'some_text';
    const path = 'tests/test-data/some_text.txt';
    write(string, path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path, string);
  });

  it('stringifies an object and writes it to a file', () => {
    const object = {
      some: 'text'
    };
    const path = 'tests/test-data/some_object.txt';
    writeJson(object, path);
    expect(fs.writeFileSync).toHaveBeenCalledWith(path, JSON.stringify(object, null, 2));
  });
});
