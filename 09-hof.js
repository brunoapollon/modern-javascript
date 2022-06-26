const array = [
  { name: 'iPhone', price: 5000, quantity: 2  },
  { name: 'MacBook Pro', price: 20000, quantity: 1  },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// traz o primeiro elemento que satisfaz a condição de busca
// .find
const find = array.find((product) => product.name === 'Magic Mouse');

// Mesma coisa que o find, porém retorna o index do elemento que tá sendo buscado
//.findIndex 
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');

console.log({find});

console.log({findIndex});

//.some
// retorna um boolean informando se algum elemento daquele array satizfaz a condição passada

const some = array.some((product) => product.price > 1000);

console.log({some});


//.every


const every = array.every((product) => product.price >= 1000);

console.log({every});

//.map 
// serve para modificar um array, podendo iserir novas proprieades em arrays de objetos
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price
}));

console.log({map});

// .filter
const filter = array.filter((product) => product.price > 1000);

console.log({filter});

//. reduce
// o reduce serve para fazer iterações e alterações com valores acumulativos 
// o parametro accumulator serve para armazenar os valores que vão sendo repassados em cada iteração
// o segundo parametro do reduce é o valor inicial do accumulator
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);

console.log({reduce});