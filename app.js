const player1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#player1Display"),
};

const player2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#player2Display"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 5;
let isGameOver = false;

player1.button.addEventListener("click", function () {
  updateScores(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  playe1.score = 0;
  player2.score = 0;
  player1.display.textContent = 0;
  player2.display.textContent = 0;
  player1.display.classList.remove("has-text-success", "has-text-danger");
  player1.display.classList.remove("has-text-success", "has-text-danger");
  player1.button.disabled = false;
  player1.button.disabled = false;
}
