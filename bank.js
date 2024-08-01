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
  const depositNumber = getInputNumber("depositAmount");

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  depositAmount.value = "";
});

//withdraw button event handler
const withdrawButton = document.getElementById("withdraw");
withdrawButton?.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  console.log(withdrawNumber);
});

function getInputNumber(id) {
  const amount = document.getElementById(id);
  const amountNumber = parseFloat(amount?.value) || 0;
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id);
  const currentNumber = parseFloat(current.innerText) || 0;
  const totalAmount = depositNumber + currentNumber;
  current.innerText = totalAmount.toFixed(2);
}
