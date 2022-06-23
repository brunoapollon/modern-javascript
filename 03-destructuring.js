const user = {
  firstName: 'Bruno',
  lastName: 'Lopes',
  age: 21,
  instagram: '@brunoapollon',
  skills: ['Back-end', 'Front-end']
}

//destructuring
const { firstName, age, skills, instagram: insta } = user;

//destructuring in arrays
const [ primary, secundary ] = skills;

console.log(firstName, age, insta);
console.log(primary, secundary);