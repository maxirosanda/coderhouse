const fs = require('fs');
const color = require('colors');
const { addListener } = require('process');


// readFileSync: lectura de un archivo en forma sincrónica
// writeFileSync: escritura de un archivo en forma sincrónica
// appendFileSync: actualización de un archivo en forma sincrónica
// unlinkSync: borrado de un archivo en forma sincrónica
// mkdirSync: creación de una carpeta

let arr = [];


function cargarDatos(){

    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

function guardarDatos() {
    try {
        fs.writeFileSync("sarasa.txt", arr);
    } catch (e) {
        console.log(e);        
    }
}

function LeerDatos(){
    let file = fs.readFileSync("sarasa.txt", "utf-8");
    console.log(file);
}

function AppendDatos() {
    let dato = "aca le puedo poner cualquier cosa";
    fs.appendFileSync("sarasa.txt", dato);
    LeerDatos();
}

function unlinkDatos() {
    fs.unlinkSync("sarasa.txt");
}

function crearDirectorio() {
    try {
        fs.mkdirSync("carpetaNueva");
        throw new Error("esta ha ocasionado un error!")
    } catch (e) {
        console.log(e);
        console.log(`No se puede escribir el archivo, codigo de error: ${e.errno}`.yellow);
    }
}

function leerDatosAsync() {
    fs.readFile("sarasa.txt", "utf-8", (err, file) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(file);
    })
}

function guardarDatosAsync() {
    
    let texto = "Esto es otro texto";

    fs.writeFile("otroArchivo2.txt", texto, err => {
        if(err){
            console.log(err);
            return;
        }

        console.log("Guardado!");
    })
}

function leerDirectorio() {
    fs.readdir("carpetaNueva", "utf-8", (err, file)=> {
        if(err) {
            console.log(err);
            return;
        }

        console.log(file);
    })
}

function desafioGenerico() {

    fs.readFile("sarasa.txt", (err, file) => {
        if(err){
            throw new Error("Ha ocurrido un error".red);
        }

        let info = {
            contenidoStr: file,
            contenidoObj: file.toString(),
            size: file.toString().length
        }    

        fs.writeFile("UnArchivoNuevo.json", JSON.stringify(info), err => {
            if(err){
                throw new Error("Ha ocurrido un error".red);
            }
            console.log("guardado!");

            fs.readFile("UnArchivoNuevo.json", (err, ultimoFile) => {
                console.log(JSON.parse(ultimoFile));
            })

        })
    });
}

async function desafioGenericoConPromise() {
    // try {
    //     let file = JSON.parse(await fs.promises.readFile("UnArchivoNuevo.json", "utf-8"));
    //     file.author = "CoderHouse";
    //     file.dato = "Test";
    //     await fs.promises.writeFile("package.json.coder", JSON.stringify(file));    
    // } catch (e) {
    //     console.log(e);
    // }

    await fs.promises.readFile("UnArchivoNuevo.json","utf-8")
            .then( async file => { 
                file = JSON.parse(file);
                file.author = "CoderHouse";
                await fs.promises.writeFile("package.json.coder", JSON.stringify(file))
                    .then( dato => console.log("guardado!"))
                    .catch( err => {
                        console.log("hubo un error al escribir", err)
                    })
            })
            .catch(err => {
                console.log("hubo un error al leer", err);
            })
}


// cargarDatos();
// guardarDatos();
// LeerDatos();
// AppendDatos();
// unlinkDatos();
// crearDirectorio();
// guardarDatosAsync();
// leerDatosAsync();
// leerDirectorio();
// desafioGenerico();
// desafioGenericoConPromise();
