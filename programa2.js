function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarNumeros() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const listaNumeros = document.getElementById('listaNumeros');

    listaNumeros.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos números

    for (let i = 1; i <= 20; i++) {
        const numero = generarNumeroAleatorio(min, max);
        listaNumeros.innerHTML += `<div>${i} - ${numero}</div>`;
    }
}
