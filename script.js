const doors = document.querySelectorAll(".door");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

let prizes = [];
let opened = false;

function assignPrizes() {
  const prizeOptions = ["🐐", "🙈", "🎁"];
  prizes = [...prizeOptions.sort(() => 0.5 - Math.random())];
  console.log("Prizes:", prizes); // optional: for debugging
}

function handleDoorClick(e) {
  if (opened) return;

  const index = parseInt(e.currentTarget.dataset.index);
  const prize = prizes[index];

  e.currentTarget.classList.add("open");
  e.currentTarget.innerHTML = `<div class="prize">${prize}</div>`;

  result.textContent =
    prize === "🎁"
      ? "🎉 You found the grand prize!"
      : prize === "🐐"
      ? "Oops! It's a goat 🐐"
      : "Just a monkey 🙈";

  opened = true;
  resetBtn.style.display = "inline-block";
}

function resetGame() {
  doors.forEach((door) => {
    door.classList.remove("open");
    door.innerHTML = "";
  });
  result.textContent = "";
  resetBtn.style.display = "none";
  opened = false;
  assignPrizes();
}

doors.forEach((door) => door.addEventListener("click", handleDoorClick));
resetBtn.addEventListener("click", resetGame);

assignPrizes();
