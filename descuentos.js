const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

function calcularPrecioConDecuento(){
    const precio = Number(inputPrice.value);
    const cupon = inputCoupon.value;
    
    if(!precio || !cupon){
        pResult.innerHTML = "Por favor rellena el formulario";
        return;
    }
    if (cupones[cupon]){
        let descuento = cupones[cupon];
        const nuevoPrecio = (precio * (100 - descuento)) / 100;
        pResult.innerHTML = "El nuevo precio con descuento es: " + nuevoPrecio;
        }
    else{
        pResult.innerHTML = "El codigo de descuento no es valido";
    };
}
button.addEventListener('click', calcularPrecioConDecuento);
