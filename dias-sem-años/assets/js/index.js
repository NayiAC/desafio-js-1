const constY = Number(365);
const constW = Number(7);
const num1 = Number(prompt("Ingrese cantidad de días"));

let years= Math.floor (num1 / constY);
let resto = num1 % constY;
let weeks= Math.floor (resto/constW);
let days= resto % constW; 

document.write("La cantidad de días ingresados son equivalentes a: " + "<br>");
document.write(years + " años " + "<br>");
document.write(weeks + " semanas " + "<br>");
document.write(days + " días " + "<br>");


