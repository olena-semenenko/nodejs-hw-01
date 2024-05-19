import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
  let contacts = [];
  // read db
  try {
    const db = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(db);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error('Error reading db.json:', error);
      return;
    }
  }
  const addedContact = createFakeContact();
  const updatedContacts = contacts.concat(addedContact);
  //   write new data
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
};

await addOneContact();
