const form = document.querySelector('#formulario')

function cancelarEnviar(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    let imc = peso / altura ** 2
    imc = imc.toFixed(1)
    const nivelImc = getNivelImc(imc)

    if (!peso) {
        setResultado('Peso Inválido!', false)
        return;
    }
    if (!altura) {
        setResultado('Altura Inválido!', false)
        return;
    }

    const msg = `Seu imc é ${imc} ${nivelImc}`
    setResultado(msg, true)
    function criaP() {
        const p = document.createElement('p')
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = ''
        const p = criaP()
        if (isValid) {
            p.classList.add('resultado-paragrafo')
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg;
        resultado.appendChild(p);

    }
    function getNivelImc(imc) {
        const valores = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return valores[5];
        if (imc >= 34.9) return valores[4];
        if (imc >= 29.9) return valores[3];
        if (imc >= 24.9) return valores[2];
        if (imc >= 18.5) return valores[1];
        if (imc < 18.5) return valores[0]
    }

} 
    
form.addEventListener('submit', cancelarEnviar)

