import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  let contacts = [];
  // read db
  try {
    const db = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(db);
    return contacts.length;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error reading db.json:', error);
      return;
    }
  }
};

console.log(await countContacts());
