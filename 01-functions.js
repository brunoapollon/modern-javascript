//Funções criadas com a keyword function tem o próprio THIS.
function myFunction() {
  this.name = 'Bruno';
}

//quando o this é utilizado uma função pode receber um construtor e virar um objeto
console.log(new myFunction());

// Arrow Functions tem o THIS DO ESCOPO na qual elas foram criadas.
// Arrow functions não podem ter um construtor 
const myArrowFunction = () => {
  this.name = 'Lopes'; // usa o this global(node)
}

console.log(this); // { name: 'Lopes' }


function soma(){
  console.log(Object.values(arguments)); //arguments é uma váriavel que é criada pelo node que pode ter todos os argumentos que estão sendo passados para a função.
}

soma(1, 2, 3, 4, 5, 6, 7)

//em arrows functions só funciona com o rest operator pois o arguments aponta pro escopo quem nem o THIS
function soma2(...argumentos){ // pegar todos os argumentos com o rest operator
  console.log(argumentos);
}

soma2(1, 2, 3, 4, 5, 6, 7, 'soma 2');