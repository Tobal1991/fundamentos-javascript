//1. tipo entero y decimal

const entero = 42;
const decimal = 3.4;
console.log(typeof entero, typeof decimal);

//2. Notacion cientifica
const cientifico = 5e3;

//3. infinitos y NaN
const infinitos = Infinity;
const noesNumero = NaN;

console.log(typeof infinitos, typeof noesNumero);

// Operaciones aritmeticas

//1. suma, resta, multiplicacion, division
const suma = 4 + 5;
const resta = 4 - 5;
const multiplicacion = 4 * 5;
const division= 4 / 5;

console.log(suma, resta, multiplicacion, division);

//2. Modulo y exponenciacion
const Modulo = 15 % 8;
const exponenciacion = 2 ** 3;

//precision
const precision= 2.1 + 0.2;
console.log(precision);
console.log(precision.toFixed(3));

//operaciones avanzadas
const raizcuadrada = Math.sqrt(16);
const valorabsoluto = Math.abs(-7);
const aleatorio = Math.random();


console.log(raizcuadrada, valorabsoluto, aleatorio)