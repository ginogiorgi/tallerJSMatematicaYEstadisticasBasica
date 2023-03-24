const empresas = {}

function encontrarPersonaPorId(idPersonaBuscada){
    return salarios.find(persona => persona.id == idPersonaBuscada);
};
function medianaPorId(idPersonaBuscada){
    const trabajos = encontrarPersonaPorId(idPersonaBuscada).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    return PlatziMath.calcularMediana(salarios);
}

function proyeccionPorPersona(idPersonaBuscada){
    let porcentajesCrecimiento = [];
    const trabajos = encontrarPersonaPorId(idPersonaBuscada).trabajos;

    for (let i = 1; i < trabajos.length; i++){
        porcentajesCrecimiento.push((trabajos[i].salario - trabajos[i - 1].salario) / trabajos[i - 1].salario );
    };
    return trabajos[trabajos.length - 1].salario * PlatziMath.calcularMediana(porcentajesCrecimiento) + trabajos[trabajos.length - 1].salario;
}
function analisisEmpresarial(){
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
}