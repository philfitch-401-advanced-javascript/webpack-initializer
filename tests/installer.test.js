import installer from '../Dependencies/installer';
const childProcess = require('child_process');

childProcess.execSync = jest.fn();

describe('installer', () => {
  it('installs dependencies', () => {
    const path = 'tests/test-data/some_text.txt';
    const pkg = ['one'];
    const dev = false;
    installer(path, pkg, dev);
    expect(childProcess.execSync).toHaveBeenCalledWith('npm i one', { 'cwd': 'tests/test-data/some_text.txt', 'stdio': 'inherit' });
  });

  it('installs dev dependencies', () => {
    const path = 'tests/test-data/some_text.txt';
    const pkg = ['one'];
    const dev = true;
    installer(path, pkg, dev);
    expect(childProcess.execSync).toHaveBeenCalledWith('npm i -D one', { 'cwd': 'tests/test-data/some_text.txt', 'stdio': 'inherit' });
  });
});
