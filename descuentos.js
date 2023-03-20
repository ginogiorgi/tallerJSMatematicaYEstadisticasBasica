const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result');

function calcularPrecioConDecuento(){
    const precio = Number(inputPrice.value);
    const cupon = inputCoupon.value;
    let descuento;
    
    if(!precio || !cupon){
        pResult.innerHTML = "Por favor rellena el formulario";
        return;
    }
    switch (cupon){
       case 'descuento30': descuento = 30;
       break;
       case 'descuento70': descuento = 70;
       break;
       case 'free': descuento = 100; 
       break;
       default: pResult.innerHTML = "El codigo de descuento no es valido";
       return;
    }
    if (descuento <= 100){
        const nuevoPrecio = (precio * (100 - descuento)) / 100;
        pResult.innerHTML = "El nuevo precio con descuento es: " + nuevoPrecio;
        }
    else{
        pResult.innerHTML = "El descuento no puede ser mayor que 100";
    };
}



button.addEventListener('click', calcularPrecioConDecuento);