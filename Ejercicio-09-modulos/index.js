import { suma } from "./modulos/controller.js";
import { multiplica } from "./modulos/controller.js";
import chalk from 'chalk';


const sum = suma(63, 120);
console.log(sum)

const mul = multiplica(34, 26);
console.log(mul)

const resultado = multiplica(suma(1, 2), suma(4, 5));
console.log(chalk.green(resultado))