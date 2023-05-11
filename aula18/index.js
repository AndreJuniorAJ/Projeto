//function criaPessoa(nome, sobrenome, idade) {
//  return{nome, sobrenome, idade};    
//}

//const pessoa1 = criaPessoa('Luiz', 'Maria', 100);
//const pessoa2 = criaPessoa('Maria ', 'Miranda', 95 );
//const pessoa3 = criaPessoa('João', 'Oliveira', 80 );
//const pessoa4 = criaPessoa('Junior', 'Lara', 75);
//const pessoa5 = criaPessoa('Jean', 'Otávio', 69 );

//console.log (pessoa1.nome, pessoa2.sobrenome)

const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Miranda',
    idade : 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);

    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()