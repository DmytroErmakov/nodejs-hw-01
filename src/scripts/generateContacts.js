// import * as fs from 'node:fs/promises';
// import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
// import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from './updateContacts.js';

// const generateContacts = (number) => {
// 1 варіант
// const items = [];
// for (let i = 0; i < number; i += 1) {
//     const contact = createFakeContact();
//     items.push(contact);
// }
// console.log(items);
// а можно ще через метод puch

// 2 варіант
const generateContacts = async (number) => {
  // const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB); // визначаємо кодування інфо
  // const contactList = JSON.parse(await fs.readFile(PATH_DB, encoding)); // читаємо інфо з файлу і парсимо в масив, кодування автоматично переводиться
  const contactList = await getAllContacts(); // аналогічно попередньому рядку але викликаємо з іншого файлу-функції
  // const items = Array(number).fill().map(() => createFakeContact()); ще варіант написання
  const newContactsList = Array(number).fill(0).map(createFakeContact); // створюємо масив інфо, заповнюємо 0 та мапимо його, можемо в () вписати так як ми передаємо ф-цію а вона може бути колбек
  // const data = [...contactList, ... newContactList]  // можемо так додавати ,  або
  contactList.push(...newContactsList);
  await updateContacts(contactList);
  // await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2)); // записуємо інфо в файл
};

generateContacts(5);
