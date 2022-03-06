const lista = [
    500,
    1000,
    1500,
    2000
];  

const mitadLista = parseInt(lista.length / 2);

function esPar(numerito){
    if (lista.length % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

if(esPar(lista.length)){
    mediana = (lista[mitadLista] + lista[mitadLista - 1])/2;
}
else{
    mediana = lista[mitadLista];
}