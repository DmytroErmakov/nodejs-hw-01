import * as path from "node:path"; 

// const path1 = path.join(process.cwd(), "src", "db", "db.json"); // 1 варіант вказання шляху - нормалізація вказання шляху
// const path1 = path.resolve('src', 'db', 'db.json'); // 2 варіант вказання шляху - нормалізація вказання шляху

// console.log(path1);

export const PATH_DB = path.resolve('src', 'db', 'db.json'); // потрібно вказати абсолютний шлях

