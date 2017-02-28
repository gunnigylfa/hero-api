import db from '../db';

const Schema = db.Schema;
const heroSchema = new Schema({
  name: String,
  secretIdentity: String,
});

export default db.model('Hero', heroSchema);
