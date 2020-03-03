const MongoClient = require('mongodb').MongoClient;
const auth = require('../services/auth');

const URL =
  process.env.OS && process.env.OS.startsWith('Windows')
    ? 'mongodb://192.168.99.100:27017'
    : 'mongodb://db:27017';
let db = null;

async function initializeDB() {
  const client = await MongoClient.connect(URL, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
  });

  db = client.db('gallery');
}

async function removeDB() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
}

async function getGallery() {
  try {
    return await db
      .collection('gallery')
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  }
}

async function addPicture(picture) {
  try {
    return await db.collection('gallery').insertOne(picture);
  } catch (e) {
    console.log(e);
  }
}
initializeDB();

module.exports = { initializeDB, removeDB, getGallery, addPicture };
