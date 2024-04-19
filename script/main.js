var audio = document.querySelector("#myAudio");         //elemen audio dng kelas "myAudio" dari dok HTML
var video = document.getElementById("mrs-video");       // //elemen video dng kelas "mrs-video" dari dok HTML
var progressBarFill = document.getElementById("progress-bar-fill");     //mengatur panajng audio
var timeDisplay = document.querySelector(".time-display");      // elemen tampilan waktu
var playButton = document.querySelector(".play-button");        // tombol putar audio
var pauseButton = document.querySelector(".pause-button");

function playPause() {          // fungsi tombol putar/jeda
    if (audio.paused) {
        audio.play();
        video.muted = true; // Mute video ketika audio dijalankan
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-flex";
    } else {
        audio.pause();
        video.pause();
        playButton.style.display = "inline-flex";
        pauseButton.style.display = "none";
    }
}

playButton.addEventListener("click", playPause); // Tautkan tombol play dengan fungsi playPause
pauseButton.addEventListener("click", playPause); // Tautkan tombol pause dengan fungsi playPause

audio.addEventListener("timeupdate", function () {      // htiung waktu ketika diperbarui
    var currentTime = formatTime(audio.currentTime);
    var duration = formatTime(audio.duration);
    timeDisplay.textContent = currentTime + " / " + duration;

    var progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = progress + "%";
});

function formatTime(time) {                 // mengembalikan waktu dalam format "menit:detik"
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}
