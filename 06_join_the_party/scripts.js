let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");
let roleInput = document.getElementById("roleInput");

function sayHello() {
  let name = nameInput.value;
  let role = roleInput.value;
  output.innerText = "Welcome, " + name + " the " + role + " to Paugh tees!".toUpperCase();
}

greetButton.onclick = sayHello;
