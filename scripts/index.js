//Nivel 1

//Ejercicio 1-arrow functions
//a
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 2));
//b
const toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(toCelsius(120));
//c
const padZeros = (num, totalLen) => {
  let numStr = num.toString();
  let numZeros = totalLen - numStr.length;
  for (var i = 1; i <= numZeros; i++) {
    numStr = '0' + numStr;
  }
  return numStr;
}
console.log(padZeros(30, 12));
//d
const power = (base, exponent) => {
  let result = 1
  for (var i = 0; i < exponent; i++) {
    result *= base
  }
  return result
}
console.log(power(5, 2))
//e
const greet = (who) => {
  console.log('Hola ' + who)
}
greet('Maria')


//Ejercicio 2 arreglar block de codigo
var users =
    [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }];

users.map(function (user) {
    console.log(user.firstName);
});


//Ejercicio 3  Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
var resultado = epic.reduce((prev, curr) => `${prev} ${curr}`);
console.log(resultado);

//Ejercicio 4  //metodo reverse
const getReverse = nuevoString => {
  console.log([...nuevoString].reverse());
}
getReverse("Buenas Tardes");

// Ejercicio 5 aync await

const b = () => {
  let promises = new Promise((resolve) => {
      setTimeout(() => resolve("Hola Mundo"), 1000)
  });
  return promises;
}

// se Realiza el async await
const a = async () => {
  let c = await b();
  console.log(c);
  llamarFunction();
}

a();
const llamarFunction = () => { 
  console.log(5);
}

//Ejercicio 6

let tasks = [
  {
      'name': 'Start React web',
      'duration': 120
  },
  {
      'name': 'Work out',
      'duration': 60
  },
  {
      'name': 'Procrastinate on facebook',
      'duration': 240
  }
];

// se usa el forEach
let arrayNombres = [];
tasks.forEach((item) => {
  arrayNombres.push(item.name);
});
console.log(tasks);
let result = tasks.map((task) => task.name);
console.log(result);

