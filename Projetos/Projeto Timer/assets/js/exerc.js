const relogio = document.querySelector('.relogio');

function tempoSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let segundos = 0;
let timer;

function iniciarRelogio() {
    relogio.classList.remove('pausado');
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = tempoSegundos(segundos);
    }, 1000);
}

function pausarRelogio() {
    clearInterval(timer);
    relogio.classList.add('pausado')   ; 
}

function pararRelogio() {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    segundos = 0;
    relogio.innerHTML = '00:00:00'
}