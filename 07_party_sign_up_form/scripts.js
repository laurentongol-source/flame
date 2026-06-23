function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
  let role = document.getElementById("roleInput").value;

  let message
  if (name == "Jay Chan"){
   message = 'ew you weirdo'
  } else if (region =="") {
  message = "Do both istg"
  } else {
    let message = `Thanks for joining the party\n Hello, ${name} the ${role} from ${region} \n`

  }

    document.getElementById("output").innerText = message;



  
}


document.getElementById("signupButton").onclick = showSignupMessage
