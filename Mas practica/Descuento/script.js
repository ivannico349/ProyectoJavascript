const coupons = [
    "promo1",
    "promo2",
    "promo3",
];
function calcularPrecioCondescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 + descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
function clickDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;
     
    let descuento;
    if (!coupons.includes(discount)) {
        alert("El cupón " + discount + " no es válido");
     } else if (discount === "promo1") {
        descuento = 15;
     } else if (discount === "promo2") {
        descuento = 30;
     } else if (discount === "promo3") {
        descuento = 25;
     }
    const precioCondescuento = calcularPrecioCondescuento(price,descuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText= "Tu precio con descuento es "+ precioCondescuento;
}