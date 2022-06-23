// com aspas simples e duplas não é possivel quebrear linha
// console.log('
//   isso da erro 
// ');

console.log(`
  No template string é possivel quebrar linhas

  e é interpretado tudo que tá dentro da template string
`);

const name = 'Bruno';
const returnName = () => name;

console.log(`Olá ${name}`);
console.log(`Olá ${() => name}`); // não funciona
console.log(`Olá ${returnName()}`); //funciona