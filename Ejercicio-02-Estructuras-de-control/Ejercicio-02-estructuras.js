/* bucle for 
for (inicialización; condición; actulización);{
Esto es el bucle
}  */


let resultfactorial = 1;
for (let i = 10; i>=1; i--) {
    resultfactorial *= i;
}
console.log(`El resultado del factorial de 10 es : ${resultfactorial}`);

let i = 10;
let result = 1;
while (i>=1) {
    result *= i;
    i--
}
console.log(`El resultado del factorial de 10 es : ${result}`);

let factor = 10;
let resultado = 1;
while (true) {
    resultado *= factor;
    factor--;
    if (factor < 1) {
        break
    }
}
console.log(`El resultado del factorial de 10 es : ${resultado}`);