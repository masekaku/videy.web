const video = document.getElementById('videoPlayer');
const popupAd = document.getElementById('popupAd');
const closeAdBtn = document.getElementById('closeAdBtn');
const countdown = document.getElementById('countdown');
let countdownInterval;

// Event untuk memulai iklan pop-up
video.addEventListener('load', () => {
    // Pause video dan tampilkan iklan pop-up
    popupAd.style.display = 'flex';
    closeAdBtn.style.visibility = 'hidden'; // Sembunyikan tombol close
    countdown.textContent = '15'; // Reset countdown
});

// Fungsi untuk memulai countdown
function startCountdown() {
    let timeLeft = 15;

    countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            countdown.textContent = --timeLeft;
        } else {
            clearInterval(countdownInterval);
            closeAdBtn.style.visibility = 'visible'; // Tampilkan tombol close
        }
    }, 1000);
}

// Fungsi untuk menutup pop-up
closeAdBtn.addEventListener('click', () => {
    popupAd.style.display = 'none';
});
