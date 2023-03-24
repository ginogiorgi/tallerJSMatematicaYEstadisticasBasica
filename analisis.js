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