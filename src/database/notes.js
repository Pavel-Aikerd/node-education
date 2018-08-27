const db = require(`./db`);
const logger = require(`../logger`);

class NotesStore {
  constructor(collection) {
    this.collection = collection;
  }
  async getNotesByAuthorId(id) {
    return (await this.collection).find({author: {id}}).toArray();
  }
  async getNotes() {
    return (await this.collection).find().toArray();
  }
  async saveNote(noteData) {
    return (await this.collection).insertOne(noteData);
  }
}

module.exports = new NotesStore(db(`notes`)
  .catch((error) => {
    logger.error(`Failed to set up notes-collection: ${error}`);
  }));
