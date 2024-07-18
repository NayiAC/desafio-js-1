const num1 = Number(prompt("Ingrese el primer número")); 
const num2 = Number(prompt("Ingrese el segundo número")); 
const num3 = Number(prompt("Ingrese el tercer número")); 
const num4 = Number(prompt("Ingrese el cuarto número")); 
const num5 = Number(prompt("Ingrese el quinto número")); 
const cantnum = (5);
let resultadoSuma = num1 + num2 + num3 + num4 + num5; 
let resultadoPromedio = resultadoSuma / cantnum;

document.write("La suma de los números ingresados es: " + resultadoSuma + "<br>");
document.write("El promedio de los números ingresados es: " + resultadoPromedio + "<br>");
