const chalk = require("chalk")
const os = require("os")
const fs = require("fs")
const orang = require("./person.json");
const calc = require("./utils/calculation.js")
const config = require("./utils/config")

console.log(config.merah);

// console.log(orang);
// console.log(orang.name);
// console.log(orang.age);

// console.log(chalk.blue ("hello world"));
// console.log(os.type());
// console.log(os.hostname());
// console.log(os.freemem());

// const myFile = fs.writeFileSync("./dataku.txt", "i love money")
// const readMyFile = fs.readFileSync("./dataku.txt", "utf-8")

// console.log(readMyFile);

// create json file
// function createPerson(person) {
//     fs.writeFileSync("./person.json", JSON.stringify(person))
//     return person
// }

// const tio = createPerson({
//     name: "prasetio",
//     age : "28"
// })

console.log(calc(12,12));