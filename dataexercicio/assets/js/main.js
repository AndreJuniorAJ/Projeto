//timeStyle não funciona
//const h1 = document.querySelector('.container h1');
//const data = new Date();
//const opcoes = {
//    dateStyle : 'full'
//};

//h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes); não funciona a hora

const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo','Segunda-Feira','Terça-Feria','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
    return diasSemana[diaSemana];
};

function getNomeMes(numeroMes) {
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses [numeroMes];
};

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
};

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);


    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAesquerda(data.getHours())}:${zeroAesquerda(data.getMinutes())}`
    );
};

h1.innerHTML = criaData(data);