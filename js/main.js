let displayprice = document.getElementById("disprecio");
let precio = localStorage.getItem("Precio");
displayprice.innerText = precio;

function obtenerValor() {
    const input = document.getElementById('myInput');
    const valor = parseFloat(input.value);
    localStorage.setItem("Precio", valor);
    displayprice.innerText = precio;
    location.reload();
}

