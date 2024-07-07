function mostrarCubosImpares() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const listaCubos = document.getElementById('listaCubos');

    listaCubos.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos números

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let i = min;

    do {
        if (i % 2 !== 0) {
            listaCubos.innerHTML += `<div>${i} - ${Math.pow(i, 3)}</div>`;
        }
        i++;
    } while (i <= max);
}


