let killed = 0;
let missed = 0;
const dead = document.getElementById(`dead`);
const lost = document.getElementById(`lost`);
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 10; i++) {
  getHole(i).onclick = function() {
    if (this.className.includes(`hole_has-mole`)) {
      killed += 1;
      dead.textContent = killed;
    } else {
      missed += 1;
      lost.textContent = missed;
    }
    checkWinner();
  }
}

function checkWinner() {
  if (killed === 10) {
    alert(`Вы победили!`);
    clearScore();
  } else if (missed === 5) {
    alert(`Вы проиграли!`);
    clearScore();
  }
}

function clearScore() {
  killed = 0;
  missed = 0;
  dead.textContent = 0;
  lost.textContent = 0;
}