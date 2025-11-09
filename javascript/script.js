import { BuscadorElementos } from "./buscadorElementos.js";
import { FormularioLogin } from "./formularioLogin.js";

const buscadorDeElementos = new BuscadorElementos();
const FORM = buscadorDeElementos.buscarElemento("#formulario1");

FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = buscadorDeElementos.buscarElemento("#username").value;
    const password = buscadorDeElementos.buscarElemento("#password").value;

    const formularioLogin = new FormularioLogin(username, password);

    if(!formularioLogin.esValido()){
        alert("Usuario o contraseña incorrectos.")
        return;
    }

    event.target.submit();

})