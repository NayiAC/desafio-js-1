/*  Se crean dos variables con sus respectivos valores 
var num1 = 1; 
var num2 = 2; 
// Se suman ambas variables y el resultado se guarda en una nueva 
var resultado = num1 + num2; 
// Se muestra el resultado en en la consola */

const num1 = Number(prompt("Ingrese el número 1")); 
const num2 = Number(prompt("Ingrese el número 2")); 
let resultadoSuma = num1 + num2; // (3)
let resultadoMultiplicacion = num1 * num2;
let resultadoDivision = num1 / num2;
let resultadoResta = num1 - num2;
let resultadoModulo = num1 % num2;
document.write("La suma es: " + resultadoSuma + "<br>");
document.write("La resta es: " + resultadoResta + "<br>");
document.write("La multiplicación es: "+ resultadoMultiplicacion + "<br>");
document.write("La división es: "+ resultadoDivision + "<br>");
document.write("La módulo es: "+ resultadoModulo + "<br>");