import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

export const getAllContacts = async () => {
  const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB); // визначаємо кодування інфо
  const fileContent = await fs.readFile(PATH_DB, encoding); // читаємо інфо з файлу і парсимо в масив, кодування автоматично переводиться

  // перевіряємо, чи це вже об'єкт або масив
  let contactList;
  try {
    contactList = JSON.parse(fileContent);
  } catch {
    throw new Error(
      'Failed to parse the contact list. The file content is not valid JSON.',
    );
    // contactList = fileContent;
  }
  // Перевіряємо чи результат це масив?
  if (!Array.isArray(contactList)) {
    throw new Error('The contact list is not an array.');
  }
  return contactList;
  //   return Array.isArray(contactList) ? contactList : JSON.parse(contactList); // перевіряємо якщо е масив то повторно не парсимо
};

// console.log(await getAllContacts());
