//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const currentTime = new Date().toLocaleString();
    timerElement.textContent = currentTime;
}

// Update every second
setInterval(updateTimer, 1000);

// Initialize immediately
updateTimer();
