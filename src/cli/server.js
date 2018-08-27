const colors = require(`colors/safe`);
const server = require(`../server/server`);

module.exports = {
  name: `server`,
  description: `Start server`,
  execute() {
    server();
  }
};
