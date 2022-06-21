let audio = new Audio("assets/music/bg.mp3");
const overlay = document.querySelector(".signup-overlay"),
  signupBtn = document.querySelector("#signup-btn"),
  signupCloseBtn = document.querySelector(".signup-overlay #close-signup");

audio.autoplay = true;
audio.loop = true;
audio.controlsList = "nodownload";
audio.volume = 1;

window.addEventListener("load", () => {
  if (audio.paused) {
    audio.play();
    document.querySelector("#btn-play").innerText = "Pause";
    document.querySelector(".overlay img").style["animation-play-state"] =
      "running";
  } else {
    audio.pause();
    document.querySelector("#btn-play").innerText = "Play";
    document.querySelector(".overlay img").style["animation-play-state"] =
      "paused";
  }
});

document.querySelector("#btn-play").addEventListener("click", (e) => {
  if (audio.paused) {
    audio.play();
    e.target.innerText = "Pause";
    document.querySelector(".overlay img").style["animation-play-state"] =
      "running";
  } else {
    audio.pause();
    e.target.innerText = "Play";
    document.querySelector(".overlay img").style["animation-play-state"] =
      "paused";
  }
});

signupBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  document.querySelector(".signup-form").style.animation = "";
});

signupCloseBtn.addEventListener("click", () => {
  document.querySelector(".signup-form").style.animation =
    "toTop 0.5s ease-in-out";

  setTimeout(() => {
    overlay.classList.remove("open");
  }, 500);
});
