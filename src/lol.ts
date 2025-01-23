let val1:number=0
let val2:number=0
let operacion:string=""

const division =(val1:number,val2:number):number|string=>{
    if(val2==0)
        return "error matematico"
    else
        return val1/val2
}

const multiplicacion =(val1:number,val2:number):number=>{
    return val1*val2
}

const suma =(val1:number,val2:number):number=>{
    return val1+val2
}

const resta =(val1:number,val2:number):number=>{
    return val1-val2
}

const agregaValores = (valor:string)=>{
    const cajaTex = document.getElementById("cajaTexto") as HTMLInputElement
    cajaTex.value+=valor
}

const limpiarPantalla = () => {
    const pantalla = document.getElementById("cajaTexto") as HTMLInputElement
    pantalla.value = ""
    val1 = 0
    val2 = 0
    operacion = ""
};

const ponerOp = (op: string) => {
    const pantalla = document.getElementById("cajaTexto") as HTMLInputElement
    val1 = parseFloat(pantalla.value)
    operacion = op
    pantalla.value = ""
};

const calcular = () => {
    const display = document.getElementById("cajaTexto") as HTMLInputElement;
    val2 = parseFloat(display.value);
    let result: number | string;

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