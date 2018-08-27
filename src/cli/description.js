const packageInfo = require(`../../package`);

module.exports = {
  name: `description`,
  description: `Shows program description`,
  execute() {
    console.log(`описание: ${packageInfo.description}`);
  }
};
