function encontrarPersonaPorId(idPersonaBuscada){
    return salarios.find(persona => persona.id == idPersonaBuscada);
};
function medianaPorId(idPersonaBuscada){
    const trabajos = encontrarPersonaPorId(idPersonaBuscada).trabajos;
    const salarios = trabajos.map((elemento) => elemento.salario);
    return PlatziMath.calcularMediana(salarios);
}