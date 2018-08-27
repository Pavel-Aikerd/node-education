const colors = require(`colors/safe`);
const version = require(`./version`);
const author = require(`./author`);
const license = require(`./license`);
const description = require(`./description`);
const server = require(`./server`);

const otherCommands = [version, author, license, description, server];

module.exports = {
  name: `help`,
  description: `Shows help`,
  execute() {
    console.log(`Это приложение ничего не делает. Доступные команды:\n${
      [this, ...otherCommands]
          .map((command) => `--${colors.grey(command.name)}:\t\t${colors.green(command.description)}`)
          .join(`\n`)
    }`);
  },
};
