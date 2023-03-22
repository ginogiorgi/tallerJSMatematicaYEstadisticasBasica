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
    ordenarLista(lista);
    const listaEsPar = esPar(lista);
    if (listaEsPar){
        const indexMedianaPar = lista.length / 2;
        return calcularPromedio([lista[indexMedianaPar], lista[indexMedianaPar - 1]]);
    }
    else {
        const indexMedianaImpar = Math.floor(lista.length / 2);
        return lista[indexMedianaImpar];
    };
};
function ordenarLista(listaDesordenada){
    const lista = listaDesordenada.sort((a, b) => a-b);
    return lista;
};
function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];

        if (listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else {
            listaCount[elemento] = 1;
        };
    };
    console.log(listaCount);
}