console.group('cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado * lado,
    };
};

console.groupEnd('cuadrado');

console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
};
function calcularAlturaTriangulo(lado1, lado2, base){
    if (lado1 == lado2 && base != lado1 && base != lado2){
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4);
    }else{
        console.warn("Este no es un triangulo isoceles");
    };
};
function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
      let S = (lado1 + lado2 + lado3) / 2;
      return Math.trunc((2 / lado1) * Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3)));
    }
    else {
      return false;
    }
  }
  

console.groupEnd('triangulo');

console.group('circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const circunferencia = diametroCirculo * Math.PI;
const areaCurculo = (radioCirculo **2) * Math.PI;
console.log({
    radioCirculo,
    diametroCirculo,
    circunferencia,
    areaCurculo,
});

function calcularCirculo(radio){
    const diametro = radio * 2
    const radioCuadrado = Math.pow(radio, 2);
    return{
        circunferencia: diametro * Math.PI,
        area: radioCuadrado * Math.PI,
    };
};


console.groupEnd('circulo');


