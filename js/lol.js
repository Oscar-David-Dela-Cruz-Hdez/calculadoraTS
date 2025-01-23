"use strict";
let val1 = 0;
let val2 = 0;
let operacion = "";
const division = (val1, val2) => {
    if (val2 == 0)
        return "error matematico";
    else
        return val1 / val2;
};
const multiplicacion = (val1, val2) => {
    return val1 * val2;
};
const suma = (val1, val2) => {
    return val1 + val2;
};
const resta = (val1, val2) => {
    return val1 - val2;
};
const agregaValores = (valor) => {
    const cajaTex = document.getElementById("cajaTexto");
    cajaTex.value += valor;
};
const limpiarPantalla = () => {
    const pantalla = document.getElementById("cajaTexto");
    pantalla.value = "";
    val1 = 0;
    val2 = 0;
    operacion = "";
};
const ponerOp = (op) => {
    const pantalla = document.getElementById("cajaTexto");
    val1 = parseFloat(pantalla.value);
    operacion = op;
    pantalla.value = "";
};
const calcular = () => {
    const display = document.getElementById("cajaTexto");
    val2 = parseFloat(display.value);
    let result;
    switch (operacion) {
        case "+":
            result = suma(val1, val2);
            break;
        case "-":
            result = resta(val1, val2);
            break;
        case "*":
            result = multiplicacion(val1, val2);
            break;
        case "/":
            result = division(val1, val2);
            break;
        default:
            result = "error 404";
    }
    display.value = result.toString();
};
window.agregaValores = agregaValores;
window.limpiarPantalla = limpiarPantalla;
window.ponerOp = ponerOp;
window.calcular = calcular;
