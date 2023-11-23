const readlineSync = require("readline-sync");
const {generarNumeroAleatorio, verificarAdivinanza} = require("./adivinanza");

const obtenerNumeroUsuario = () => {
    return readlineSync.question("Elija un numero: ");
};

const JuegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log("¿Eres capaz de adivinar el numero secreto?")
    console.log("¡Encuentralo entre el 1 y el 100!")

    while (numeroAdivinado != numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
};

JuegoAdivinanza();