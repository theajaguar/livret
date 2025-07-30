let baseAmount = 350.00;
let rate = 0.02;
let startTime = Date.now();

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    baseAmount = parseFloat(data.amount);
    startTime = new Date(data.lastUpdate).getTime();
    updateDisplay();
    setInterval(updateDisplay, 1000);
  });

function updateDisplay() {
  const now = Date.now();
  const secondsElapsed = (now - startTime) / 1000;
  const gainPerSecond = baseAmount * rate / (365 * 24 * 60 * 60);
  const newAmount = baseAmount + gainPerSecond * secondsElapsed;
  const soldeEl = document.getElementById("solde");
  soldeEl.innerText = newAmount.toFixed(8) + " €";

  // Animation scale rapide
  soldeEl.style.transform = "scale(1.1)";
  setTimeout(() => {
    soldeEl.style.transform = "scale(1)";
  }, 150);
}
