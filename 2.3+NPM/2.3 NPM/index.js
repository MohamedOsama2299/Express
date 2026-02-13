// // var generateName = require('sillyname');
// import generateName from sillyName;
// var sillyName = generateName();

// console.log(`My Name Is ${sillyName}.`);
// استدعاء مكتبة sillyname
import generateName from "sillyname";

// اسم مضحك
const sillyName = generateName();
console.log(`My silly name is ${sillyName}.`);

// أسماء أبطال خارقين يدوية
const heroes = ["Batman", "Spider-Man", "Wonder Woman", "Iron Man", "Hulk"];
const heroName = heroes[Math.floor(Math.random() * heroes.length)];
console.log(`I am ${heroName}!`);
