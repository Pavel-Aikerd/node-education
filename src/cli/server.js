const colors = require(`colors/safe`);

module.exports = {
  name: `server`,
  description: `Start server`,
  execute() {
    console.log(colors.green(`i'm starting`));
  }
};
