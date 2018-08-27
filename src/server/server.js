const express = require(`express`);
const bodyParser = require(`body-parser`);
const port = process.env.SERVER_PORT || 8080;

const createServer = () => {
  const app = express();
  // app.use(express.static(`static`));
  app.use(bodyParser.urlencoded({extended: true}));
  app.listen(port, () => {
    console.log(`We are live on  http://localhost:${port}`);
  });
  const notesStore = require(`../database/notes`);
  const imageStore = require(`../database/images`);
  const notesRouter = require(`./routes/note_routes`)(notesStore, imageStore);
  app.use(`/api/notes`, notesRouter);
  return app;
};

module.exports = createServer;
