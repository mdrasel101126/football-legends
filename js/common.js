function getPlayerNumber() {
  const playerListArray = document.getElementsByTagName("li");
  const playerNumber = playerListArray.length;
  return playerNumber;
}

function getPlayer(id) {
  const playerNameField = document.getElementById(id);
  const playerName = playerNameField.innerText;

  const getPlayerListField = document.getElementById("player-list");

  const li = document.createElement("li");
  li.innerText = playerName;
  getPlayerListField.appendChild(li);
}
function setSelectButton(id) {
  const buttonField = document.getElementById(id);
  buttonField.setAttribute("disabled", true);
}
