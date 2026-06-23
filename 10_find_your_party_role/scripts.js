function matchRole() {
  let positionElement = document.querySelector('input[name="alignment"]:checked');
  let message = "";

  if (!positionElement) {
    message = "Please choose a party alignment.";
  } else {
    let position = positionElement.value;
    let selectedIssues = [];

    let issueBoxes = document.querySelectorAll('.issue');
    for (let i = 0; i < issueBoxes.length; i++) {
      if (issueBoxes[i].checked) {
        selectedIssues.push(issueBoxes[i].value);
      }
    }

    if (selectedIssues.length == 0) {
      message = "Please select at least one issue you care about.";
    } else if (position == "progressive" && selectedIssues.includes("environment")) {
      message = "🌱 You’d be perfect for the Outreach Team.";
    } else if (position == "moderate" && selectedIssues.includes("economy")) {
      message = "📊 You’d make a great Policy Analyst."
    } else if (position == "traditional" || selectedIssues.includes("education")) {
      message = "🎖️ You’d bring valuable perspective to Strategy.";
    } else if (position == "progressive" && selectedIssues.includes("housing")) {
      message = "You will be a builder. haha lol"
    } else if 
     else {
      message = "🤝 You’d be a great all-round supporter!";
    }
   
  }

  document.getElementById("matchResult").innerText = message;
}

document.getElementById("matchButton").onclick = matchRole;
