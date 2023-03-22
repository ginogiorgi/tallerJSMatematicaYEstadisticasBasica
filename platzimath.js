function calcularPromedio(lista) {
    const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    })

    const promedio = sumaLista / lista.length;
    return promedio;
};   
function esPar(lista){
    return !(lista.length % 2);
};
function calcularMediana(lista){
    const listaEsPar = esPar(lista);
    if (listaEsPar){

    }
    else {
        const indexMedianaImpar = Math.floor(lista.length / 2);
        return lista[indexMedianaImpar];
    }
}
