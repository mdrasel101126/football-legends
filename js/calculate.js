function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputString = inputField.value;
  const inputValue = parseFloat(inputString);
  return inputValue;
}

function setInnerText(id, totalPlayerExpenses) {
  const innerTextField = document.getElementById(id);
  innerTextField.innerText = totalPlayerExpenses;
}
function setInnerTextEmpty(id) {
  const innerTextField = document.getElementById(id);
  innerTextField.innerText = "";
}

document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlyerExpenses = getInputValue("input-per-player");
  if (isNaN(perPlyerExpenses) || perPlyerExpenses < 0) {
    setInnerTextEmpty("player-expenses");
    alert("Please insert valid input!!");
    return 0;
  }
  const playerNumber = getPlayerNumber();
  if (playerNumber === 0) {
    alert("Please select at least one player!!");
    return;
  }
  const totalPlayerExpenses = perPlyerExpenses * playerNumber;
  setInnerText("player-expenses", totalPlayerExpenses);
});

document.getElementById("btn-total").addEventListener("click", function () {
  const playerNumber = getPlayerNumber();
  if (playerNumber === 0) {
    alert("Please select at least one player!!");
    return;
  }
  const perPlayerExpenses = getInputValue("input-per-player");
  if (isNaN(perPlayerExpenses) || perPlayerExpenses < 0) {
    alert("Please insert valid input!!");
    return;
  }
  const managerCost = getInputValue("input-manager");
  if (isNaN(managerCost) || managerCost < 0) {
    alert("Please insert valid input!!");
    return;
  }
  const coachCost = getInputValue("input-coach");
  if (isNaN(coachCost) || coachCost < 0) {
    alert("Please insert valid input!!");
    return;
  }
  const totalCost = perPlayerExpenses * playerNumber + managerCost + coachCost;
  setInnerText("total", totalCost);
});
