const {Router} = require(`express`);
const notesRouter = new Router();
const bodyParser = require(`body-parser`);
const structurize = require(`../../util/structurize`);
const notesStore = require(`../../database/notes`);
const imageStore = require(`../../database/images`);

notesRouter.use(bodyParser.json());

notesRouter.get(``, async (req, res) => {
  const resp = await notesRouter.notesStore.getNotes();
  res.send(resp);
});

notesRouter.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const resp = await notesRouter.notesStore.getNotesByAuthorId(id);
  res.send(resp);
});

notesRouter.post(``, async (req, res) => {
  const data = req.body;
  if (!data.date) {
    data.date = parseInt(new Date().getTime(), 10);
  }
  console.log(JSON.stringify(data));
  const note = structurize(data);
  const resp = await notesRouter.notesStore.saveNote(note);
  res.send(resp);
});

notesRouter.notesStore = notesStore;
notesRouter.imageStore = imageStore;

module.exports = notesRouter;
