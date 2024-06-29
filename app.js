
var startButton = document.getElementById('start');
var timerDisplay = document.getElementById('timer');

startButton.addEventListener('click', () => {
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    var countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Countdown Complete!';
            start.disabled = false; 
        } else {
            var hoursLeft = Math.floor(totalSeconds / 3600);
            var minutesLeft = Math.floor((totalSeconds % 3600) / 60);
            var secondsLeft = totalSeconds % 60;
            timerDisplay.textContent = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
            totalSeconds--;
            start.disabled = true; 
        }
    }, 1000);
});

