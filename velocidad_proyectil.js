const aceleracion_gravedad = 9.81 // m/s^2

function calcular_altura_maxima (velocidad_inicial, angulo) {
    let altura_maxima = velocidad_inicial ** 2 * (Math.sin(angulo * Math.PI / 180)) ** 2 / (2 * aceleracion_gravedad);
    return altura_maxima;
};

function calcular_distacia_maxima(velocidad_inicial,angulo) {
    let distancia_maxima = velocidad_inicial ** 2 * Math.sin(2 * angulo * Math.PI / 180) / aceleracion_gravedad;
    return distancia_maxima;
}


let entrada = require('./entrada.json');


for (let caso of entrada) {
    console.log(`Altura máxima caso ${entrada.indexOf(caso) + 1}:  ${calcular_altura_maxima(caso.v0, caso.alpha).toFixed(2)} m.`);
    console.log(`Distancia máxima caso ${entrada.indexOf(caso) + 1}:  ${calcular_distacia_maxima(caso.v0, caso.alpha).toFixed(2)} m.`);
}