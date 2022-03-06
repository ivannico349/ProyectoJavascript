//Helpers
function calcularPrecioCondescuento(sueldo,porcentaje){
    const porcentajeSueldo = sueldo*(porcentaje/ 100) ;
    return porcentajeSueldo;
}


//Clicks

function clickSueldo(){
    const inputsueldo= document.getElementById("sueldo");
    const sueldo = inputsueldo.value;
    const ResultP = document.getElementById("ResultadoSueldo");
    ResultadoSueldo.innerText= "Tu sueldo es: "+ sueldo;
}

function clickPorcentaje(){
        const inputsueldo= document.getElementById("sueldo");
        const sueldo = inputsueldo.value;

        const inputDiscount = document.getElementById("PorcentajeSueldo");
        const discount = inputDiscount.value;
                 
        const precioCondescuento = calcularPrecioCondescuento(sueldo,discount);
    
        const ResultP = document.getElementById("ResultadoPorcentaje");
        ResultP.innerText= "El Resultado es: " + precioCondescuento;
}

function clickDiferencia(){
        const inputsueldo= document.getElementById("sueldo");
        const sueldo = inputsueldo.value;

        const inputDiscount = document.getElementById("Diferencia");
        const discount = inputDiscount.value;

        const diferencia = sueldo - discount;
        const ResultP = document.getElementById("ResultadoDiferencia");
        ResultP.innerText= "La diferencia entre tu sueldo y el valor es de: " + diferencia;
}

function clickDolares(){
    let dolar = 201;
    const inputsueldo= document.getElementById("sueldo");
    const sueldo = inputsueldo.value;
    const dolarizado = sueldo / dolar;
    const ResultP = document.getElementById("ResultadoDolares");
    ResultP.innerText= "Tu sueldo en dolares es: " + dolarizado.toFixed(2);
}

function clickDia(){
    let dia = 31;
    const inputsueldo= document.getElementById("sueldo");
    const sueldo = inputsueldo.value;
    const diario = sueldo / dia;
    const ResultP = document.getElementById("ResultadoDia");
    ResultP.innerText= "Tu sueldo en dolares es: " + diario.toFixed(2);

}

