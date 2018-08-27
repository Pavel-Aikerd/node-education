const colors = require(`colors/safe`);

const packageInfo = require(`../../package`);

const version = packageInfo.version.split(`.`);

module.exports = {
  name: `version`,
  description: `Shows program version`,
  execute() {
    console.log(`v${colors.red(version[0])}.${colors.green(version[1])}.${colors.blue(version[2])}`);
  }
};
