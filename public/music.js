//Access DOM elements using the querySelector and getElementById methods
let audio = document.getElementById("audiofile");
let audioCon = document.querySelector(".music-wrapper");
let audioPlayer = document.querySelector(".music-player");
let songName = document.querySelector(".song-name");
let artistName = document.querySelector(".artist-name");
let progressBar = document.getElementById("pro-bar");
let timeElapsed = document.querySelector(".elapsed");
let timeLeft = document.querySelector(".duration");

//Access button elements from the DOM
let playBtn = document.getElementById("play");
let nextSongBtn = document.getElementById("next");
let prevSongBtn = document.getElementById("prev");
let pauseBtn = document.getElementById("pause");

//Event listeners 
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong)

function playSong() {
    //Audio will play
    audio.play();
    //Artist name and song name will be rendered onto the page
    document.querySelector(".song-name").innerText = 'Missing You'
    document.querySelector(".artist-name").innerText = 'Purrple Cat'

}


function pauseSong() {
    //Audio will pause
    audio.pause();
}


