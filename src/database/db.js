const MongoClient = require(`mongodb`).MongoClient;
const logger = require(`../logger`);
const DB_URL = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const connectToDb = async (collectionName) => {
  let collection;
  try {
    const client = await MongoClient.connect(DB_URL);
    const dBase = await client.db(DB_NAME);
    collection = await dBase.collection(collectionName);
  } catch (e) {
    logger.error(`Failed to set up notes-collection: ${e}`);
    throw e;
  }
  return collection;
};

module.exports = connectToDb;
