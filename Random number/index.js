
console.log("Math.random",Math.floor( Math.random()*100));

function getRandom100Int() {
    return Math.floor(Math.random() * (100+1));
}

const test = document.querySelector(".number");
test.innerHTML = getRandom100Int();

/* document.querySelector("numberMax").innerHTML = getRandomInt(100);
test.innerHTML = getRandomInt(max); */
const pElement = document.getElementById("numberMax");

const maxValue = parseInt(pElement.textContent, 10);

const randomInt = getRandomInt(maxValue);

pElement.innerHTML = randomInt;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
