const express = require(`express`);
const bodyParser = require(`body-parser`);

const notesRouter = require(`./routes/note_routes`);

const port = process.env.SERVER_PORT || 8080;

const createServer = () => {
  const app = express();
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(`/api/notes`, notesRouter);
  app.listen(port, () => {
    console.log(`We are live on  http://localhost:${port}`);
  });
  return app;
};

module.exports = createServer;
