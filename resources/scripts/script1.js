function cambiarPower(power) {
    const personaje = document.getElementById("personaje");
    const titular = document.getElementById("titular");

    switch (power) {
        case 1:
            personaje.src = "../img/power1.png";
            document.body.style.backgroundColor = "green";
            titular.textContent = "Sentido Arácnido";
            break;
        case 2:
            personaje.src = "../img/power2.png";
            document.body.style.backgroundColor = "red";
            titular.textContent = "Agilidad Mejorada";
            break;
        case 3:
            personaje.src = "../img/power3.png";
            document.body.style.backgroundColor = "blue";
            titular.textContent = "Arrojar Telarañas";
            break;
        case 4:
            personaje.src = "../img/power4.png";
            document.body.style.backgroundColor = "white";
            titular.textContent = "Escalada de Muro";
            break;
        default:
            personaje.src = "../img/spiderman.png";
            document.body.style.backgroundColor = "";
            titular.textContent = "Spiderman";

    }

    // Ajustar estilos del fondo
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
