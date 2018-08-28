const colors = require(`colors/safe`);
const app = require(`../server/server`);

const port = process.env.SERVER_PORT || 8080;

module.exports = {
  name: `server`,
  description: `Start server`,
  execute() {
    app.listen(port, () => {
      console.log(`We are live on  http://localhost:${port}`);
    });
  }
};
