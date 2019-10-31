const childProcess = require('child_process');

function installer(path, packages, dev) {
  console.log('installer initiated');
  
  if(dev) {
    packages.forEach((pkg) => {
      childProcess.execSync(`npm i -D ${pkg}`, {
        cwd: path,
        stdio: 'inherit'
      });
    });
  } else {
    packages.forEach((pkg) => {
      childProcess.execSync(`npm i ${pkg}`, {
        cwd: path,
        stdio: 'inherit'
      });
    });
  }
  console.log('installer completed');
}

module.exports = installer;
