
import { BuscadorElementos } from "./buscadorElementos.js";
import { FormularioLogin } from "./formularioLogin.js";

const buscadorDOM = new BuscadorElementos()
const FORM = buscadorDOM.buscarElemento('#formulario1');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = buscadorDOM.obtenerElValor('#username');
    const password = buscadorDOM.obtenerElValor('#password');

    const formularioLogin = new FormularioLogin(username, password);

    if(!formularioLogin.esValido()){
        alert('Usuario o contraseña incorrectos.');
        return;
    }

    event.target.submit();
});

