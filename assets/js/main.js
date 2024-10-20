/*=============== FILTERS TABS ===============*/
const VanzXCard = document.querySelector(".VanzXCard");
const XAbout = document.getElementById("#XAbout");
const XActivity = document.getElementById("#Activity");
const XConnect = document.getElementById("#Connect");
const VanzMenu = document.querySelector(".VanzMenu");
const VanzGame = document.querySelector(".VanzGame");
const VanzMenuOverlay = document.querySelector(".VanzMenuOverlay");
const VanzMusicOverlay = document.querySelector(".VanzMusicOverlay");
const VanzGameOverlay = document.querySelector(".VanzGameOverlay");
const VanzMusic = document.querySelector(".VanzMusic");

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      klik.play();
      tc.classList.remove("FiltersActive");
    });
    target.classList.add("FiltersActive");

    tabs.forEach((t) => {
      klik.play();
      t.classList.remove("VanzBtnActive");
    });
    tab.classList.add("VanzBtnActive");
    klik.play();
  });
});

function OpenMenu() {
  VanzMenu.classList.add("VanzMenuShow");
  VanzXCard.style.overflow = "hidden";
  klik.play();
}
function CloseOverlay() {
  klik.play();
  VanzXCard.style.overflow = "auto";
  VanzMenu.classList.remove("VanzMenuShow");
  VanzMusic.classList.remove("VanzMusicShow");
  VanzGame.classList.remove("VanzGameShow");
}
function OpenMusic() {
  klik.play();
  VanzMusic.classList.add("VanzMusicShow");
  VanzMenu.classList.remove("VanzMenuShow");
  VanzGame.classList.remove("VanzGameShow");
}
function OpenGame() {
  klik.play();
  VanzMenu.classList.remove("VanzMenuShow");
  VanzGame.classList.add("VanzGameShow");
}
function OpenGalery() {
  klik.play();
  window.location.replace("galery/");
}
// Link

function OpenSpotify() {
  klik.play();
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=8580e4c5b3be448d");
}

/// Var Audio ///

var klik = new Audio("https://editor-miring-squad.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;
