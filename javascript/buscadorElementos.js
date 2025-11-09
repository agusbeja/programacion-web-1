export class BuscadorElementos {
    constructor() {

    }

    buscarElemento(cssSelector) {
        return document.querySelector(cssSelector);
    }

    obtenerElValor(cssSelector) {
        return this.buscarElemento(cssSelector).value;
    }
}