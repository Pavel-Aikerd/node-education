const packageInfo = require(`../../package`);

module.exports = {
  name: `license`,
  description: `Shows program license`,
  execute() {
    console.log(`лицензия: ${packageInfo.license}`);
  }
};
