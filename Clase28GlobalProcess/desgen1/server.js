let numerosDevuelveTrue = [4, 8, 12, 18];
let numerosDevuelveFalse = [4, 8, 12, 18, "asd"];

const asd = num => {
    return num.every( elemento => elemento % 2 === 0);
}


console.log(asd(numerosDevuelveTrue));
console.log(asd(numerosDevuelveFalse));