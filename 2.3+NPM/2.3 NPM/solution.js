import generateName from "sillyname";  
import superheroes from "superheroes";

const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

const heroName = superheroes.random();
console.log(`I am ${heroName}!`);
