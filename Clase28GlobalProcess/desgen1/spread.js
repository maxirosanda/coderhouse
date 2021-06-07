const arrayA = ["CoderHouse", "JavaScript", "Frotend"];
const arrayB = ["Angular","React","Vue"];
const json = {id: 1, nombre: "JavaScript", contenidos: ["variables", "condicionales", "ciclos"]}

console.log("ORIGINAL ANTES DE LOS CAMBIOS: ", arrayA)

let arr2 = arrayA;

let NUEVOARRAY = [...arrayA];


let json2 = json;


arr2[0] = "HOLA QUE TAL";
arr2[1] = "COMO ESTAS";

NUEVOARRAY[0] = "COSMES";
NUEVOARRAY[1] = "FULANITO";

console.log("COPIA: ", arr2);

console.log("ORIGINAL: ", arrayA);
console.log("COPIA CON SPREAD: ", NUEVOARRAY);

json2.nombre = "COSMES FULANITO";


let jsonQueNoAltereElOriginal = JSON.parse(JSON.stringify(json));
// let jsonNuevo = {...json, "a", "b"};


jsonQueNoAltereElOriginal.nombre = "HERNAN DIAZ";
jsonNuevo.nombre = "PEPE GOMEZ";
console.log("COPIA JSON: ", json2);

console.log("ORIGINAL JSON: ", json);

console.log("JSON  QUE NO SE ALTERA: ", jsonQueNoAltereElOriginal);

console.log("OTRO JSON NUEVO QUE NO ALTERA: ", jsonNuevo);


// let json = {
//     nombre: "hernan",
//     apellido: "diaz",
//     datosDeContacto: {
//         direccion: "siempre viva",
//         numero: "123",
//         localidad: "springfield"
//     }
// }
