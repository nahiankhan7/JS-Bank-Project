//login button event handler
const loginButton = document.getElementById("loginButton");
loginButton?.addEventListener("click", function () {
  const allContent = document.getElementById("allContent");
  allContent.style.display = "none";

  const bankDetails = document.getElementById("bankDetails");
  bankDetails.style.display = "block";
});

//deposit button event handler
const depositButton = document.getElementById("deposit");
depositButton?.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount");
  const depositNumber = parseFloat(depositAmount.value) || 0;

  const currentDeposit = document.getElementById("currentDeposit");
  const currentDepositNumber = parseFloat(currentDeposit?.innerText) || 0;

  const totalDeposit = depositNumber + currentDepositNumber;
  currentDeposit.innerText = totalDeposit.toFixed(2);
  depositAmount.value = "";
});
