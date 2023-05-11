// (condição) ? 'Valor para verdadeiro' : 'Valor para falso' operação ternaria

const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);