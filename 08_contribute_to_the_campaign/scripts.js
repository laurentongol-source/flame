let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("thankYouMessage").innerText = message;
}


function refundTenDollars() {
  if (totalDonations > 0) {
    totalDonations = totalDonations - 10;
    document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

    let message = "You're such a chud bru?";
    document.getElementById("thankYouMessage").innerText = message;
  } else if (totalDonations <= 0) {
    totalDonations = 0

    let message = "There's no money to take bozo"
    document.getElementById("thankYouMessage").innerText = message;

  }
}



 


document.getElementById("giveButton").onclick = giveTenDollars
document.getElementById("refundButton").onclick = refundTenDollars
