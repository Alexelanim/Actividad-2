const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) =>{
    if (numeroAdivinado == numeroSecreto) {
        console.log("¡Felicitaciones! Adivinaste el numero secreto")
    } else if (numeroAdivinado > numeroSecreto) {
        console.log("El numero es menor. ¡Sigue intentando!")
    } else if (numeroAdivinado < numeroSecreto) {
        console.log("El numero es mayor. ¡Sigue intentando!")
    }
};

module.exports = {generarNumeroAleatorio, verificarAdivinanza};