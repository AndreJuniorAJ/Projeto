function escopo() {
    const container = document.querySelector('.container');
 
    const elementos = [
        {tag: 'p', texto: 'Primeira frase'},
        {tag: 'div', texto: 'Segunda frase'},
        {tag: 'footer', texto: 'Terceira frase'},
        {tag: 'section', texto: 'Quarta frase'}
    ];

    const div = document.createElement('div'); // criar elementos 
    
    for (let i = 0; i < elementos.length; i ++) {
        const {tag, texto} = elementos[i]; // desestruturar o array 
        const temporario = document.createElement(tag); // criando a tag
        temporario.innerHTML = texto; //texto criado
        div.appendChild(temporario);
    }
 
    container.appendChild(div);

};

escopo();

