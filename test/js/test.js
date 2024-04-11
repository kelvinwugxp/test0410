const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("名前を入力して下さい");
  button.textContent = `Player 1: ${name}`;
}