var video = document.getElementById("video");
var playButton = document.querySelector(".play-button");
var pauseButton = document.querySelector(".pause-button");

function playPause(){
    if(video.paused) {
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-flex";
    } else {
        video.pause();
        pauseButton.style.display = "inline-flex";
        playButton.style.display = "none";
    }
}
