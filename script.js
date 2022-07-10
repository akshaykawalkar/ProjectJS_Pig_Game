// selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const finalSP0 = document.getElementById("score--0");
const finalSP1 = document.getElementById("score--1");

const scoreE0 = document.querySelector("#score--0");
const scoreE1 = document.getElementById("score--1");
const diceE = document.querySelector(".dice");
const currentPlayer0 = document.querySelector("#current--0");
const currentPlayer1 = document.querySelector("#current--1");

const newE = document.querySelector(".btn--new");
const rollE = document.querySelector(".btn--roll");
const holdE = document.querySelector(".btn--hold");

// Starting values
let finalScore, score, finalS, activeplayer, playing;
const init = function () {
  finalScore = [0, 0];
  scoreE0.textContent = 0;
  scoreE1.textContent = 0;
  diceE.classList.add("hidden");
  score = 0;
  finalS = 0;
  activeplayer = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  playing = true;
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  score = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//Rolling dice functinality

rollE.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove("hidden");
    diceE.src = `dice-${dice}.png`;

    if (dice !== 1) {
      score = score + dice;
      document.getElementById(`current--${activeplayer}`).textContent = score;
    } else {
      //switching player
      switchPlayer();
    }
  }
});

holdE.addEventListener("click", function () {
  // current core to score
  if (playing) {
    finalS += score;
    document.getElementById(`score--${activeplayer}`).textContent = finalS;

    // scire >= 100;
    if (finalS >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      diceE.classList.add("hidden");
    } else {
      // switch player
      switchPlayer();
    }
  }
});

newE.addEventListener("click", init);
