
import { BuscadorElementos } from "./js/buscadorElementos.js";
import { FormularioLogin } from "./js/formularioLogin.js";
import { Navbar } from "./js/navbar.js";
import { AccountOption } from "./js/perfil.js";
import { MENU } from "./constants/constants.js";

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

const navbar = new Navbar();
const accountOption = new AccountOption();

navbar.render(MENU);
accountOption.render();

