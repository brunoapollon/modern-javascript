const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({res: 'Succeso!'});
    // reject('Error');
  }, 2000);
})

//No then e catch por mais que tratem a promise, eles não param a execução do código
//enquanto a chamada da função vai pra  callstack o node continua compilando o que ta em baixo

// apiCall.then((response) => {
//   console.log(response);
// }).catch((err) => {
//   console.log(err);
// });

//Esse log é executado antes da promise ser resolvida com o then, mesmo estando depois doo then

// No async await nada que está em baixo do await vai ser executado pois ele trava a execução do código
async function run() {
  try {
    const response = await apiCall;
    console.log(response);
    console.log('Depois da promise');
  } catch (error) {
    console.log(error);
  }
}

run();