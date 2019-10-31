import installer from '../Dependencies/installer';
const childProcess = require('child_process');

childProcess.execSync = jest.fn();

describe('installer', () => {
  it('installs dependencies', () => {
    const path = 'tests/test-data/some_text.txt';
    const pkg = ['one', 'two'];
    const dev = false;
    installer(path, pkg, dev);
    expect(childProcess.execSync).toHaveBeenCalledWith((`npm i ${pkg[0]}`, {
      cwd: path,
      stdio: 'inherit'
    }));
  });

  it('installs dev dependencies', () => {
    const path = 'tests/test-data/some_text.txt';
    const pkg = ['one', 'two'];
    const dev = true;
    installer(path, pkg, dev);
    expect(childProcess.execSync).toHaveBeenCalledWith((`npm i -D ${pkg}`, {
      cwd: path,
      stdio: 'inherit'
    }));
  });
});
