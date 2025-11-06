function cambiarPower(power) {
    const personaje = document.getElementById("personaje");

    switch (power) {
        case 1:
            personaje.src = "../img/power1.png";
            document.body.style.backgroundColor = "green";
            break;
        case 2:
            personaje.src = "../img/power2.png";
            document.body.style.backgroundColor = "red";
            break;
        case 3:
            personaje.src = "../img/power3.png";
            document.body.style.backgroundColor = "blue";
            break;
        case 4:
            personaje.src = "../img/power4.png";
            document.body.style.backgroundColor = "white";
            break;
        default:
            personaje.src = "img/personaje_base.png";
            document.body.style.backgroundImage = "";
    }

    // Ajustar estilos del fondo
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}
