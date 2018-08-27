const readline = require(`readline`);
const fs = require(`fs`);
const generate = require(`./generate`);

module.exports = {
  name: `default`,
  description: `Shows default and errors`,
  execute(args) {
    if (args.length > 0) {
      console.error(`Неизвестная команда ${args}.
          Чтобы прочитать правила использования приложения, наберите "--help"`);

      process.exit(1);

    }
    console.log(`Привет пользователь!
      Эта программа будет запускать сервер «Keksobooking».
      Автор: Кекс.`);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const askForGenerate = () => new Promise((resolve, reject) => {
      rl.question(`Предлагаю сгенерировать данные (y/n)?`, (answer) => answer === `y` ? resolve() : reject());
    });

    const askForElements = () => new Promise((resolve, reject) => {
      rl.question(`Сколько элементов необходимо создать? `, (elements) => {
        if (!isNaN(elements)) {
          resolve(elements);
        }
        reject(`это не число`);
      });
    });

    const askForPath = (elements) => new Promise((resolve) => {
      rl.question(`Укажите путь до файла: `, (path) => resolve([elements, path]));
    });

    const askForExistingFile = (data) => new Promise((resolve) => {
      fs.exists(data[1], (exists) => exists
        ? rl.question(`файл уже существует, перезаписать? (y/n) `, (answer) => answer === `y` ? resolve(data) : rl.close())
        : resolve(data)
      );
    });

    askForGenerate()
        .then(askForElements)
        .then(askForPath)
        .then(askForExistingFile)
        .then((result) => {
          generate.execute(result);
          console.log(`Готово!`);
          return result;
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
          return (err);
        })
        .then(() => rl.close());
  }
};
