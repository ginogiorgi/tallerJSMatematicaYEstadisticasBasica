const button = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

function calcularPrecioConDecuento(){
    const precio = Number(inputPrice.value);
    const descuento = Number(inputDiscount.value);
    const nuevoPrecio = (precio * (100 - descuento)) / 100;

    if(precio || descuento) {
        if (descuento < 100){
            pResult.innerHTML = "El nuevo precio con descuento es: " + nuevoPrecio;
            }
            else{
                pResult.innerHTML = "El descuento no puede ser mayor que 100";
            };
    }
    else{
        pResult.innerHTML = "Por favor rellena el formulario"
    };
}

button.addEventListener('click', calcularPrecioConDecuento);