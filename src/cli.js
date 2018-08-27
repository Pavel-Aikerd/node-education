const version = require(`./cli/version`);
const help = require(`./cli/help`);
const author = require(`./cli/author`);
const license = require(`./cli/license`);
const description = require(`./cli/description`);
const server = require(`./cli/server`);

const args = process.argv.slice(2);

const commands = [version, help, author, license, description, server];

const currentCommand = commands.find((command) => {
  return `--${command.name}` === args[0];
}) || help;

currentCommand.execute(args);
