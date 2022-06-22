function printGreeting(message) {
  console.log(message);
}


function printGreeting2(message = "Olá mundo!") {
  console.log(message);
}

printGreeting();
printGreeting2();
printGreeting('segunda chamada 1');
printGreeting2('segunda chamada 2');