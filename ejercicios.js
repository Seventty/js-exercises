//Ejercicios
//
//Primer ejercicio: Programar una funcion que cuente el numero de caracteres de una cadena de texto ("Hola mundo por ejemplo")

const counter = (string) => console.log(string.length)


// Realizado
// Segundo ejercicio: Programar una funcion que devuelva el texto recortado segun el numero de caracteres indicados

const cut = (string,count) => console.log(string.substring(0,count));

//Realizado
//Tercer ejercicio: Programar una funcion que dado un string, devuelve un arr de textos separados por cierto caracter eje ["Hola", "Que", "Tal"]

const arrText = (string) => console.log(string.split(" "));

//Cuarto ejercicio: Programar una funcion que repita un texto las veces que le pases por parametro. (Muy facil)

const repeat = function(string, count){
  for(let index = 0; index < count; index++){
    console.log(string);
  }
}


//Realizado
//Quinto ejercicio: Programar una funcion que invierta las palabras de una cadena de texto

const reverse = (string) => console.log(string.split("").reverse().join("")); 

//Sexto ejercicio: Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo eje: "Hola mundo, adios mundo","mundo" devolvera 2 

const wordCounter = function(string,flag){
  const expresion = new RegExp(flag, "g");
  console.log(string.match(expresion).length);
}


//Septimo ejercicio: Programar una funcion que diga si una palabra es palindroma

const palindrome = function(string){
  if(string == string.split("").reverse().join("")){
    console.log(`${string} es palindrome`);
  }else{console.log(`${string} no es palindrome`);}
}

//Octavo ejercicio: Programa una funcion que elimine cierto patron de caracteres de un texto dado, eje: xzy1, xyz2, xyz3, xzy. devolveria 1,2,3

const patron = (string, flag) => console.log(string.replaceAll(flag, ""));


//Noveno ejercicio: Programar una funcion que saque un numero random entre 501 & 600

const randomNumber = (min = 501, max = 600) => console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Decimo ejercicio: Funcion que reciba un numero & diga si es capicua eje (2002) retorna true

const capicuaNumber = number => {
  if(typeof(number) == 'number'){
    if(number.toString() == number.toString().split("").reverse().join("")){
      console.log(`${number} es capicua`);
    }else{console.log(`${number} no es capicua`)}
  }else{console.log("No es un numero");}
}	

//Decimo-primer ejercicio: Programar una funcion que calcule el factorial de un numero n eje (5) = 120

const factorial = number => {
  let counter = number;
  for(let index = 1; index < number; index++){
    counter = counter * index;
    console.log(counter);
  }
}

//Decimo-segundo ejercicio: Programar una funcion que determine si un numero es primo
//Decimo-tercer ejercicio: Programar una funcion que determine si un numero es par o impar

//Decimo-cuarto ejercicio: Programar una funcion para convertir grados celcius a Fahrenheit & vicesersa

const tempConversor = (temp, flag) => {
	switch(flag){
	  case "c":
	    console.log((temp*9/5)+32);
	    break;
	  case "f":
	    console.log((temp-32)*5/9);
	    break;
	  default:
	    console.log("Introduce una opcion valida");
	    break;
  }
}

// Decimo-quinto ejercicio: Determina si un número entero es un palíndromo. 
//Un número entero es un palíndromo cuando se lee lo mismo hacia atrás que hacia adelante.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const numbers = x.toString();
  let reversed = numbers.split("").reverse().join("")
  return (x==reversed);
};

// Decimo-sexto ejercicio: Contar todas las letras de un texto.
let text = "Lorem pluritas ploz musicals ipsum advaem";

/**
 * @param {string} text 
 * @return {char[]}
 */
const getChars = text => text.toLowerCase().replace(/\s/g, '').split('');

/**
 * @param {string} text 
 * @return {object}
 */
const repeatedChar = text => {
    let dic = {};
    for(char of getChars(text)){
        if(getChars(char) in dic){
            ++dic[getChars(char)]; // if the char is in the dic, add another one
        } else {
            dic[getChars(char)] = 1; // if the char isn't the dic, add new value
        }
    }
    console.log(dic)
}

// Decimo-septimo ejercicio: Frecuencia de fibonacci.
/**
 * @param {number} num 
 * @return {number}
 */
const fibonacci = num => {
   let n1 = 0, n2 = 1, next;
   for(let i = 1; i <= num; i++){
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
   console.log(n2); 
}

// Decimo-octavo ejercicio: FizzBuzz. Si el numero es divisor de 3 es un numero fizz.
// Si es divisor de 3 y 5 es un numero FizzBuzz
(function fizzBuzz() {
    for(i = 0; i <= 100; i++){
        let str = "";
        if(i % 3 === 0){
            str += "fizz"
        }
        if(i % 5 === 0){
            str += "buzz"
        }
        console.log(str + i)
    }
})()