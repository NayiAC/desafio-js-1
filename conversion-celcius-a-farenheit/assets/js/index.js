const celcius = Number(prompt("Ingrese Grados Celcius"))
const constK = Number(273.15)
const constF1 = Number(9/5)
const constF2 = Number(32)
let resultadoKelvin = celcius + constK;
let resultadosFarenheit = (celcius * constF1) + constF2;
document.write("Conversión a Kelvin:" + resultadoKelvin + "<br>");
document.write("Conversión a Farenheit:" + resultadosFarenheit + "<br>");
