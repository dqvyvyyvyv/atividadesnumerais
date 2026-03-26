// 1. COUNTDOWN TIMER (30 Minutes)
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Reset to 30:00 when reaches 0
        }
    }, 1000);
}

// 2. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. INITIALIZE
window.onload = function () {
    // Start countdown
    let thirtyMinutes = 60 * 30;
    let display = document.querySelector('#countdown');
    if (display) {
        startCountdown(thirtyMinutes, display);
    }
    
    // Check for buy buttons (the modal is not present in this version, but logic can be added if needed)
};
