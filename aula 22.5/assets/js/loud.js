//const pontuacaoUsuario = 1500
//const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';
//console.log(nivelUsuario)
const form = document.querySelector('#calculo'); //chamei o formulário para pausar o evento

form.addEventListener('submit',function(e){
    e.preventDefault();


    

})

function clicou() {
    let res = document.getElementById('resultado')
    let nivelUsuario = Number(document.getElementById('nivel').value);

    if (!nivelUsuario) {
        resultado('Informação inválida', false)
        return;
    }

    if(nivelUsuario <= 8000){
        resultado.innerHTML = `Nivel de um inseto ${nivelUsuario}`
    } else {
        resultado.innerHTML = `O miserável é um gênio ${nivelUsuario}`
    }

}

