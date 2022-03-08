const aceleracion_gravedad = 9.81 // m/s^2

function calcular_altura_maxima (velocidad_inicial, angulo) {
    let altura_maxima = velocidad_inicial ** 2 * (Math.sin(angulo * Math.PI / 180)) ** 2 / (2 * aceleracion_gravedad);
    return altura_maxima;
};

function calcular_distacia_maxima(velocidad_inicial,angulo) {
    let distancia_maxima = velocidad_inicial ** 2 * Math.sin(2 * angulo * Math.PI / 180) / aceleracion_gravedad;
    return distancia_maxima;
}


console.log(calcular_distacia_maxima(10, 45));