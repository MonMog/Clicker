window.onload = function() {
  let countdownInterval;

  const startButton = document.getElementById("start-button");
  const clickArea = document.getElementById("click-area");
  const result = document.getElementById("clicks-per-second");
  const timer = document.getElementById("timer");
  const clickCount = document.getElementById("click-count");
  const retryButton = document.getElementById("retry-button");



  let clicks = 0;
  let countdown;

  startButton.addEventListener("click", start);
  clickArea.addEventListener("click", countClicks);
  retryButton.addEventListener("click", start);


  function start() {
      clickArea.style.pointerEvents = "auto";
      clicks = 0;
      countdown = 5;
      timer.textContent = countdown;
      clickCount.textContent = clicks;
      startButton.style.display = "none";
      retryButton.style.display = "none";
      clickArea.style.display = "flex";
      countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    function updateCountdown() {
      countdown--;
      timer.textContent = countdown;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        showResult();
      }
    }
    
    function countClicks() {
      clicks++;
      clickCount.textContent = clicks;
    }
    
    function showResult() {
      result.textContent = "Clicks per second: " + (clicks / 5).toFixed(3);
      clickArea.style.display = "none";
      retryButton.style.display = "block";
    }
    
};
