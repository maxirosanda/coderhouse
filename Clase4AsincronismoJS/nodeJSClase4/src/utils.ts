export default class Utils {
    // Se imprime el resultado por pantalla.
    static imprimirEnPantalla(val: any) {
        var node = document.createElement('li');
        var nodoTexto = document.createTextNode(val);
        node.appendChild(nodoTexto);
        document.getElementById("lista").appendChild(node);
    }
}