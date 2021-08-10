import {red, green, yellow, bgWhite } from "https://deno.land/std@0.100.0/fmt/colors.ts";

let numeros = Deno.args.map( num => Number(num));
numeros.sort( (a, b) => a - b);

const promedio = () => {
    let suma = 0;
    numeros.forEach( num => suma += num);
    return suma / numeros.length;
};

let textos:string[] = [];

textos.push('************************************');
textos.push(`Números: ${numeros}`);
textos.push(`Mínimo: ${numeros[0]}`);
textos.push(`Máximo: ${numeros[numeros.length - 1]}`);
textos.push(`Promedio: ${promedio()}`);
textos.push('************************************');

const file = await Deno.open('./resultados.dat', {write: true, create: true});
const contentBytes = new TextEncoder().encode(textos.join('\n'));
await Deno.writeAll(file, contentBytes);
file.close();

console.log(textos[0]);
console.log(textos[1]);
console.log(bgWhite(yellow(textos[2])));
console.log(bgWhite(red(textos[3])));
console.log(bgWhite(green(textos[4])));
console.log(textos[5]);