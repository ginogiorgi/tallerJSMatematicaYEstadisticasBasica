const PlatziMath = {};


PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => {
        return valorAcumulado + nuevoValor;
    })

    const promedio = sumaLista / lista.length;
    return promedio;
};   
PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
};
PlatziMath.calcularMediana = function calcularMediana(lista){
    PlatziMath.ordenarLista(lista);
    const listaEsPar = PlatziMath.esPar(lista);
    if (listaEsPar){
        const indexMedianaPar = lista.length / 2;
        return PlatziMath.calcularPromedio([lista[indexMedianaPar], lista[indexMedianaPar - 1]]);
    }
    else {
        const indexMedianaImpar = Math.floor(lista.length / 2);
        return lista[indexMedianaImpar];
    };
};
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    const lista = listaDesordenada.sort((a, b) => a-b);
    return lista;
};
PlatziMath.calcularModa = function calcularModa(lista) {
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

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];

    return listaMaxNumber[0];
};
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i){
    const lista = listaDesordenada.sort((a, b) => a[i]-b[i]);
    return lista;
};
PlatziMath.mediaGeometrica = function mediaGeometrica(lista){
    const multiplicacionLista = lista.reduce((a,b) => a*b);
    return Math.pow(multiplicacionLista, 1 / lista.length);
}
PlatziMath.promedioPonderado = function promedioPonderado(lista){
    const noteWithCredit = lista.map((element) => element.note * element.credit);
    const sumNotesWithCredit = noteWithCredit.reduce((a,b) => a + b);
    const credits = lista.map((element) => element.credit);
    const sumOfCredits = credits.reduce((a,b) => a + b);

    return sumNotesWithCredit / sumOfCredits;
}