import { createFakeContact } from '../utils/createFakeContact.js';

import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts(); // отримуємо всі контакти
  const newContact = createFakeContact(); // створюємо новий контакт
  contactList.push(newContact); // додаємо новий контакт
  await updateContacts(contactList); // викликаємо оновлення контатків
};

addOneContact();
