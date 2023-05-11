function clicou() {
    let nome = window.prompt('Qual é o seu nome?')

    let res = window.document.getElementById('resultado')

    res.innerHTML = `Olá, <strong>${nome}</strong>! É um grande prazer te conhecer!;`
}