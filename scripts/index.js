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



//Nivel 2
//Ejercicio 7 y 8

document.getElementById("submit").addEventListener ("click",() => {
  let num1 = document.forms["tables"]["num1"]; 
  let num2 = document.forms["tables"]["num2"]; 
  
  
  num1.classList.remove("is-invalid"); 
  document.getElementById("error1").textContent ="";
  
  num2.classList.remove("is-invalid"); 
  document.getElementById("error2").textContent ="";
  
   // Verificamos si esta vacio o los numeros son mayor de 10 o menos 1 para poner la clase is-invalid y dar el error
  if(num1.value == "" || num1.value > 10 || num1.value < 1) {
      num1.classList.add("is-invalid");
      document.getElementById("error1").textContent = "No puedes escribir un numero menor de 1 y mayor de 10";
  }
  if (num2.value == "" || num2.value > 10 || num2.value < 1) {
      num2.classList.add("is-invalid");
      document.getElementById("error2").textContent = "No puedes escribir un numero menor de 1 y mayor de 10";
}
   //Si estan los 2 numeros y estan entre el 1 y el 10
  if ((num1.value != "" && num1.value <= 10 && num1.value >= 1) && (num2.value != "" && num2.value <= 10 && num2.value >= 1)) { 
      let tablaRes = document.getElementById("resultado"); 
      tablaRes.classList.add("tabla");
      changePage();
      makeTable(num1, num2, tablaRes);
  }
});


//Se crea la tabla
const makeTable = (num1, num2, tablaRes, numStart=1) => {
  

  if (numStart <= num2.value){
      // Si el numero 1 es menor al numero 2  se crean columnas
      let row = document.createElement('tr');
      tablaRes.appendChild(row); 
      //se crean las filas
      let datos = document.createElement('td'); 
      row.appendChild(datos);
      datos.textContent = `${num1.value}x${numStart}`;
      let datos2 = document.createElement('td'); 
      row.appendChild(datos2);
      //Se imprime el resultado
      datos2.textContent = `= ${num1.value * numStart}`;  
     // al numStar se le incrementa +1
      makeTable(num1, num2, tablaRes, numStart+1);
  }
}

//Funcion para cambiar de pagina cuando se da click
const changePage = () => {
  document.getElementById("caja1").style.display = "none";
  document.getElementById("caja2").style.display = "block";
}