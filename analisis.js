let empresas = {}

function encontrarPersonaPorId(idPersonaBuscada){
    return salarios.find(persona => persona.id == idPersonaBuscada);
};
function medianaPorId(idPersonaBuscada){
    const trabajos = encontrarPersonaPorId(idPersonaBuscada).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    return PlatziMath.calcularMediana(salarios);
}
function proyeccionPorIdPersona(idPersonaBuscada){
    let porcentajesCrecimiento = [];
    const trabajos = encontrarPersonaPorId(idPersonaBuscada).trabajos;

    for (let i = 1; i < trabajos.length; i++){
        porcentajesCrecimiento.push((trabajos[i].salario - trabajos[i - 1].salario) / trabajos[i - 1].salario );
    };
    return trabajos[trabajos.length - 1].salario * PlatziMath.calcularMediana(porcentajesCrecimiento) + trabajos[trabajos.length - 1].salario;
}
function analisisEmpresarial(){
    empresas = {}
    salarios.forEach((persona) => {
        persona.trabajos.forEach((trabajo) => {
            if (!empresas[trabajo.empresa]) {
                empresas[trabajo.empresa] = {};
            };
            if (!empresas[trabajo.empresa][trabajo.year]) {
                empresas[trabajo.empresa][trabajo.year] = [];
            };
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        });
    });
    return empresas;
};
function medianaPorAnoEmpresas(nombre, year){
    analisisEmpresarial();
    if (!empresas[nombre]){
        console.warn('la empresa no existe');
    } 
    else if (!empresas[nombre][year]){
        console.warn('Ese ano no esta registrado');
    }
    else {
      return PlatziMath.calcularMediana(empresas[nombre][year]);
    };
};
function proyeccionEmpresa(nombre){
    analisisEmpresarial();
    if (!empresas[nombre]){
        console.warn('la empresa no existe');
    }
    else {
        const empresaYear = Object.keys(empresas[nombre]);
        const listaMedianaYear = empresaYear.map((year) => {
            return medianaPorAnoEmpresas(nombre, year);
        });
        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYear.length; i++){
            porcentajesCrecimiento.push((listaMedianaYear[i] - listaMedianaYear[i - 1]) / listaMedianaYear[i - 1]);
        };
        return listaMedianaYear[listaMedianaYear.length - 1] * PlatziMath.calcularMediana(porcentajesCrecimiento) + listaMedianaYear[listaMedianaYear.length - 1];
    };
};