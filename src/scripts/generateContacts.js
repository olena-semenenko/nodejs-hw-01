import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
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
  //   generate new contacts
  const newContacts = [];
  for (let i = 0; i < number; i += 1) {
    newContacts.push(createFakeContact());
  }
  const updatedContacts = contacts.concat(newContacts);
  //   write new data
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
};

await generateContacts(5);
await generateContacts(3);
