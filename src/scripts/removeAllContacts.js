import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  // write empty [] to db
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to db.json:', error);
  }
};

await removeAllContacts();
