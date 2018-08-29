const express = require(`express`);
const router = new express.Router();
const note = require(`../../controllers/NoteController`);

router.get(``, note.allNotes);

router.get(`/:id`, note.getNoteById);

router.post(``, note.saveNote);

module.exports = router;
