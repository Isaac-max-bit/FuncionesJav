/* Funcion regular */

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

let funcionFlecha = () => {
    console.log('Esto es una funcion flecha'); 
}
funcionFlecha();

let funcionDeExpresion = function () {
    console.log('Esto es una función regular');
};
funcionDeExpresion();