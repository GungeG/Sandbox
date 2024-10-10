/* let letters = ["a", "b", "c", "d", "e", "f", "g", "h"]

console.log("letters", letters[5])
 */

function greeting(firstname) {
    return `Hello, ${firstname}!`
}
const sayHello = greeting;
console.log(sayHello("Mona"));
console.log(greeting("Kasper"))

function congreet(firstname){
    console.log(`Hello, ${firstname}!`);
}
setTimeout(congreet, 1000, "ron");


const person4 = {
    firstname: "Anton",
    lastname: "Thomsen",
    hired: false
}
const person3 = {
    firstname: "Sigurd",
    lastname: "Correy",
    hired: true
}
const person2 = {
    firstname: "Tanja",
    lastname: "Mikkelsen",
    hired: false
}

function hire(person){
    person.hired = true
}
function fire(person){
    person.hired = false
}
/* hire(person4);
fire(person3); */

function fireorhire(action, person){
    action(person);
}
fireorhire(hire, person4);
console.log("person4", person4)
console.log("person3", person3)

const people = ["Ron", "Harry", "Neville", "Hermione"];
function testParms (a, b, c ,d){
    console.log(`a:${a},b:${b},c:${c},d:${d},`)
}
people.forEach(testParms)