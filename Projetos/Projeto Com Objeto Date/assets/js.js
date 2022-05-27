const data = new Date()
const section = document.querySelector('.container');
const localData = section.querySelector('h1');

function pegarData() {
    const diaSemana = data.getDay()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const diaTexto = diaEscrito(diaSemana);
    const mesTexto = mesEscrito(mes);
    const dia = data.getDate()

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    function diaEscrito (dia) {
        switch (dia) {
            case 0:
                dia = 'Domingo'
                return dia;
            case 1:
                dia = 'Segunda-Feira';
                return dia;
            case 2:
                dia = 'Terça-Feira';
                return dia;
            case 3:
                dia = 'Quarta-Feira';
                return dia;
            case 4:
                dia = 'Quinta-Feira';
                return dia;
            case 5:
                dia = 'Sexta-Feira';
                return dia;
            case 6:
                dia = 'Sábado';
                return dia;
            default:
                dia = '';
                return dia;
        }
    }
    function mesEscrito (mes) {
        switch (mes) {
            case 1:
                mes = 'Janeiro';
                return mes;
            case 2:
                mes = 'Fevereiro';
                return mes;
            case 3:
                mes = 'Março';
                return mes;
            case 4:
                mes = 'Abril';
                return mes;
            case 5:
                mes = 'Maio';
                return mes;
            case 6:
                mes = 'Junho';
                return mes;
            case 7:
                mes = 'Julho';
                return mes;
            case 8:
                mes = 'Agosto';
                return mes;
            case 9:
                mes = 'Setembro';
                return mes;
            case 10:
                mes = 'Outubro';
                return mes;
            case 11:
                mes = 'Novembro';
                return mes;
            case 12:
                mes = 'Dezembro';
                return mes;
        }
    }

    msg = `${diaTexto}, ${dia} de ${mesTexto} de ${ano} às ${hora}:${minutos}`
    localData.innerHTML = msg
}

pegarData()