let audio = new Audio("assets/music/bg.mp3");

audio.autoplay = true;
audio.loop = true;
audio.controlsList = "nodownload";
audio.volume = 1;

window.addEventListener("load", () => {
  if (audio.paused) {
    audio.play();
    document.querySelector("#btn-play").innerText = "Pause";
    document.querySelector(".container").style["animation-play-state"] =
      "running";
  } else {
    audio.pause();
    document.querySelector("#btn-play").innerText = "Play";
    document.querySelector(".container").style["animation-play-state"] =
      "paused";
  }
});

document.querySelector("#btn-play").addEventListener("click", (e) => {
  if (audio.paused) {
    audio.play();
    e.target.innerText = "Pause";
    document.querySelector(".container").style["animation-play-state"] =
      "running";
  } else {
    audio.pause();
    e.target.innerText = "Play";
    document.querySelector(".container").style["animation-play-state"] =
      "paused";
  }
});
