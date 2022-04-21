/* Codigo del cuadradro */

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log(`Los lados del Cuadrado miden: ${ladoCuadrado} cm`)

function perimetroCuadrado(lado) {
  return lado*4;
}
perimetroCuadrado()
// console.log(`El perimetro del Cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
  return lado*lado;
} 

// console.log(`El área del Cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();


/* Codigo del Triangulo */


console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: lado 1: ${ladoTriangulo1} cm, lado 2: ${ladoTriangulo2} cm, base: ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5
// console.log(`La altura del triangulo es: ${alturaTriangulo} cm`)

function perimetroTriangulo(lado1, lado2, base){
  return lado1+lado2+base;
}
// console.log(`El perimetro del Triangulo es: ${perimetroTriangulo} cm`);

function areaTriangulo(base, altura) {
  return (base*altura)/2;
}
// console.log(`El área del Triangulo es: ${areaTriangulo} cm^2`);

function  alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    const altura =Math.sqrt(lado1**2 - ((base**2) / 4)); 
    return altura;
  }
  else{
    alert("No es un triangulo Isoceles")
  }
}

console.groupEnd();


/* Codigo del Circulo */
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo} cm`)

// Diametro
function diametroCirculo(radio){
  return radio *2
}
// console.log(`El diametro del circulo es: ${diametroCirculo} cm`);

// PI
const PI = Math.PI;
// console.log(`PI es: ${PI} `);

//Circunferencia
function perimetroCirculo(radio){
  return diametroCirculo(radio) * PI;
} 
// console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`)

//Area
function areaCirculo(radio){
   return (radio * radio ) * PI
};
// console.log(`El area del circulo es: ${areaCirculo} cm^2`);

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
  const lado = document.getElementById("InputCuadrado").value

  alert(perimetroCuadrado(lado));
}

function calcularAreaCuadrado(){
  const lado = document.getElementById("InputCuadrado").value;

  alert(areaCuadrado(lado));
}
