"use strict";

// Dark mode start
const darkmodeBtn = document.querySelector("#dark-mode-btn");
darkmodeBtn.addEventListener("click", function (e) {
  document.querySelector("html").classList.toggle("dark");
  document.querySelector(".moon-icon").classList.toggle("hidden");
  document.querySelector(".sun-icon").classList.toggle("hidden");
  document.querySelector("#bg-gradienty").classList.toggle("bg-gradienty");
});
// Dark mode end
