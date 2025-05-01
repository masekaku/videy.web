const video = document.getElementById('videoPlayer');
const popupAd = document.getElementById('popupAd');
const closeAdBtn = document.getElementById('closeAdBtn');
const countdown = document.getElementById('countdown');
const adFrame = document.getElementById('adFrame');

let countdownInterval;

// Show pop-up ad when play is clicked
video.addEventListener('play', () => {
    // Pause the video
    video.pause();

    // Display the pop-up ad
    popupAd.style.display = 'flex';
    closeAdBtn.style.visibility = 'hidden'; // Hide close button initially
    countdown.textContent = '15'; // Reset countdown
});

// Start countdown when ad is fully loaded
function startCountdown() {
    let timeLeft = 15;

    // Ensure countdown starts only if iframe is loaded
    countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            countdown.textContent = --timeLeft;
        } else {
            clearInterval(countdownInterval);
            closeAdBtn.style.visibility = 'visible'; // Show close button
        }
    }, 1000);
}

// Close the pop-up ad
closeAdBtn.addEventListener('click', () => {
    popupAd.style.display = 'none';
    video.play(); // Resume the video
});
