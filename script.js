/* Funcion regular */

// const { skaleHumanProtocol } = require("wagmi/chains")

// function unaFuncion() {
//     for (let index = 0; index < 5; index++){
    
//     console.log(25 * 25);
//     console.log(25 - 25);
//     console.log(25 / 25);
//     console.log(25 + 25);
//     console.log("Vuelta: " + index);
// }
// }

/* Función Regular - Llamado  */

// unaFuncion();
// let nombre = 'Jaime Zapata'
// console.log(nombre);

// let nombre = prompt("Ingresa tu nombre  : ")
// alert("Que onda " + nombre)

// funcionDeExpresion()
// let funcionDeExpresion = function(){
//     for (let index = 0; index < 5; index++){
    
//         console.log(25 * 25);
//         console.log(25 - 25);
//         console.log(25 / 25);
//         console.log(25 + 25);
//         console.log("Vuelta: " + index);
// }

// };


// let  repetir = true;
// while(repetir){
//     let opcion = prompt('Seleccione:\n1 - sumar\n2 - restar\n3 - multiplicar\n4 - dividir\n5 - todas\n6 - salir')
//     switch(opcion){
//         case '1':
//             sumar();
//         break;
//         case '2':
//             restar();
//         break;
//         case '3':
//             multiplicar();
//         break;
//         case '4':
//             dividir();
//         break;
//         case '5':
//             todas();
//         break;
//         case '6':
//             repetir = false;
//         break;
//     }
// }

// function sumar(){
//     let num1 = Number(prompt('ingrese un número : '));
//     let num2 = Number(prompt('ingrese segundo número : '));
//     alert("La suma es: " + (num1 + num2));
// }

// function restar(){

//     let num1 = Number(prompt('ingrese un número : '));
//     let num2 = Number(prompt('ingrese segundo número : '));
//     alert("La resta es: " + (num1 - num2));
// }

// function multiplicar(){

//     let num1 = Number(prompt('ingrese un número : '));
//     let num2 = Number(prompt('ingrese segundo número : '));
//     alert("La multiplicación es: " + (num1 * num2));
// }

// function dividir(){

//     let num1 = Number(prompt('ingrese un número : '));
//     let num2 = Number(prompt('ingrese segundo número : '));
//     if(num2 === 0){
//         alert("No se puede dividir por cero");
//     } else{
//         alert("La división es: " + (num1 / num2));
//     }
// }

// function todas(){

//     let num1 = Number(prompt('ingrese un número : '));
//     let num2 = Number(prompt('ingrese segundo número : '));
//     alert("La suma es: " + (num1 + num2));
//     alert("La resta es: " + (num1 - num2));
//     alert("La multiplicación es: " + (num1 * num2));
//     alert("La division es: " + (num1 / num2));
// }

// let funcionFlecha = () => {
//     console.log('Esto es una funcion flecha'); 
// }

// funcionFlecha();

// let funcionDeExpresion = function () {
//     console.log('Esto es una función regular');
// };
// funcionDeExpresion();

// function unaFuncion(){
//     console.log(1);
//     return "Hola";
// }

// const saludo = unaFuncion();
// console.log(saludo);

// function suma(a, b = 20){
//     return a + b;
// }


// const unaFuncion = () => {
//     console.log(1);
// };

// unaFuncion();

function convertirCelsiusAFahrenheit(celsius){
    let resultado = celsius * 9 / 5.0 + 32;

    return resultado;
}

function convertirCelsiusACelsius(fahrenheit){
    let resultado = (fahrenheit - 32) * 5 / 9.0;

    return resultado;
}

let celsius = 32;
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius}°C = ${resultado}°F`);


console.log();

let fahrenheit = resultado;
resultado = convertirCelsiusACelsius(fahrenheit);
console.log(`${fahrenheit}°F = ${resultado}°C`)
