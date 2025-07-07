
let baseAmount = 300.00;
let rate = 0.02; // 2 % par an
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
  document.getElementById("solde").innerText = newAmount.toFixed(8) + " €";
}
