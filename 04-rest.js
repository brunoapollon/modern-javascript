const user = {
  firstName: 'Bruno',
  lastName: 'Lopes',
  age: 21,
  instagram: '@brunoapollon',
  skills: ['Back-end', 'Front-end', 'Mobile']
}

//rest operator
// no rest a variavel que vai pegar o resto precisa ser a ultima variavel
const { firstName, skills, ...rest } = user;

//rest operator in arrays
const [ primary, ...restArray ] = skills;

console.log(firstName, skills);
console.log("resto: ", rest);
console.log("resto Array: ", restArray);
console.log(primary);