import * as fs from "node:fs/promises";

import { PATH_DB } from "../constants/contacts.js";

export const updateContacts = contact => {
    fs.writeFile(PATH_DB, JSON.stringify(contact, null, 2)); // перезаписуємо JSON масив контатків
};