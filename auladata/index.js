//const data = new Date (0 + tresHoras - umDia); // 01/01/1970 timeStamp unix ou época unix
// const data = new Date (2019, 3); // a, m, d, h, M, s, ms.
const data = new Date(1672705067145
);
console.log ('Dia', data.getDate());
console.log ('Mês', data.getMonth() + 1); // mês começa do zero
console.log ('Ano', data.getFullYear());
console.log ('Hora', data.getHours());
console.log ('Min', data.getMinutes());
console.log ('Seg', data.getSeconds());
console.log ('ms', data.getMilliseconds());
console.log ('Dia semana', data.getDay()); // 0 - domingo sábado - 6
console.log(data.toString());
console.log(Date.now());