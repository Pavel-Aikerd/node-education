const packageInfo = require(`../../package`);

module.exports = {
  name: `author`,
  description: `Shows program author`,
  execute() {
    console.log(`автор: ${packageInfo.author}`);
  }
};
