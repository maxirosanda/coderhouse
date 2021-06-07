sumar = () => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;     
    }
    return suma.toString();
}

process.on('message', () => {
    process.send(sumar());
})