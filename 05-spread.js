const user = {
  firstName: 'Bruno',
  lastName: 'Lopes',
  age: 21,
  instagram: '@brunoapollon',
  skills: ['Back-end', 'Front-end', 'Mobile'],
  active: false
}

// user.active = true;
// Object.assign(user, {active: true}); // assign serve para fazer um merge entre objetos


console.log({user});

// spread (espalhar) operator
// O spread serve para respeitar o conceito de imutabilidade no React, o operador pega todos os atributos de uma variavel e espelha em outra

const updatedUser = {
  ...user,
  active: true,
};

console.log({updatedUser});
