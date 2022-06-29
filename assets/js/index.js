// the mp3 file is stored in the assets folder
let audio = new Audio("assets/music/bg.mp3");

// main variables
const overlay = document.querySelector(".signup-overlay"),
  signupBtn = document.querySelector("#signup-btn"),
  signupCloseBtn = document.querySelector(".signup-overlay #close-signup"),
  fromSignUpBtn = document.querySelector(".signup-form .btn-sign-up"),
  text = document.querySelector(".container .coming-soon");

audio.autoplay = true;
audio.loop = true;
audio.muted = false;

audio.controlsList = "nodownload";

audio.volume = 1;

// global functions
const closeSignup = () => {
  document.querySelector(".signup-form").style.animation =
    "toTop 0.5s ease-in-out";

  setTimeout(() => {
    overlay.classList.remove("open");
  }, 500);
};

const play = async () => {
  try {
    await audio.play();
  } catch (error) {
    console.log(error);
    document.querySelector("#btn-play").innerText = "Join Voice";
  }
};

const typeTextInto = (text, element, delay = 250) => {
  let i = 0;
  element.innerHTML = "";
  let interval = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
    }
  }, delay);
};

// on window load
window.addEventListener("load", () => {
  if (audio.paused) {
    play();
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

// open signup form
signupBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  document.querySelector(".signup-form").style.animation = "";
});

// close signup form
signupCloseBtn.addEventListener("click", closeSignup);
fromSignUpBtn.addEventListener("click", closeSignup);

// Play and Pause Btn
document.querySelector("#btn-play").addEventListener("click", (e) => {
  const img = document.querySelector(".overlay img");

  if (audio.paused) {
    play();
    e.target.innerText = "Pause";
    img.style.cssText = `
      animation-play-state:running;
      filter: hue-rotate(0deg) !important;
    `;
  } else {
    audio.pause();
    e.target.innerText = "Play";
    img.style.cssText = `
      animation-play-state:paused;
      filter: hue-rotate(228deg) !important;
    `;
  }
});

typeTextInto(text.innerText, text, 100);
