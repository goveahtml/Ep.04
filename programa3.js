const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

function verFrutas() {
    const listaFrutas = document.getElementById('listaFrutas');
    listaFrutas.innerHTML = frutas.map((fruta, index) => `<li>${index + 1} - ${fruta}</li>`).join('');
}

function ordenarFrutas() {
    frutas.sort();
    verFrutas();
}

function invertirFrutas() {
    frutas.reverse();
    verFrutas();
}

function longitudFrutas() {
    const listaFrutas = document.getElementById('listaFrutas');
    listaFrutas.innerHTML = `<li>Longitud: ${frutas.length}</li>`;
}

function insertarFruta() {
    const nuevaFruta = document.getElementById('nuevaFruta').value;
    if (nuevaFruta) {
        frutas.push(nuevaFruta);
        verFrutas();
        document.getElementById('nuevaFruta').value = '';
    } else {
        alert("Por favor, introduce una fruta.");
    }
}

function eliminarFruta() {
    frutas.pop();
    verFrutas();
}
