import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
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
  // thanos ;)
  for (let i = 0; i < contacts.length; i += 1) {
    if (Math.random() >= 0.5) {
      contacts.splice(i, 1);
      i -= 1;
    }
  }
  //   write new data
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
};

await thanos();
