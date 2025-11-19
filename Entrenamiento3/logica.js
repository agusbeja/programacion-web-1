const contenedor = document.querySelector(".js-cuadricula-container");
const filtro = document.getElementById("filtro");
let paises = [];

async function cargarPaises() {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population");
    paises = await res.json();
    mostrarPaises(paises);
}

function mostrarPaises(lista) {
    contenedor.innerHTML = "";
    lista.forEach(pais => {
        const div = document.createElement("div");
        div.className = "pais";
        div.innerHTML = `
            <img src="${pais.flags.svg}" class="bandera">
            <h4>${pais.name.common}</h4>
        `;
        div.addEventListener("click", () => mostrarPopup(pais));
        contenedor.appendChild(div);
    });
}

filtro.addEventListener("input", () => {
    const texto = filtro.value.toLowerCase();
    const filtrados = paises.filter(p =>
        p.name.common.toLowerCase().startsWith(texto)
    );
    mostrarPaises(filtrados);
});

function mostrarPopup(pais) {
    document.getElementById("nombrePais").innerText = pais.name.common;
    document.getElementById("capitalPais").innerText =
        "Capital: " + (pais.capital?.[0] || "N/A");
    document.getElementById("poblacionPais").innerText =
        "Población: " + pais.population.toLocaleString();

    document.getElementById("popup").style.display = "flex";
}

document.getElementById("cerrar").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});

cargarPaises();
