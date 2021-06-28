import navbar from "/partials/navbar/navbar.js";
import nameTitle from "/sections/name-title/name-title.js";
import aboutMe from "/sections/about-me/about-me.js";
import skills from "/sections/skills/skills.js";
import footer from "/partials/footer/footer.js";

nameTitle();
aboutMe();
skills();
footer();
navbar();

const darkMode = document.querySelector("#enable-dark");
const icons = document.querySelectorAll(".icon path");
let isDark = false;

darkMode.onclick = () => {
  darkMode.style["pointer-events"] = "none";
  if (!isDark) {
    darkMode.classList.add("animate-dark-mode");
  } else {
    darkMode.classList.add("animate-light-mode");
  }

  document.querySelector("body").classList.toggle("dark-mode");
  icons.forEach((icon) => {
    icon.style.fill = isDark ? "#222429" : "white";
  });
  isDark = !isDark;
};

darkMode.addEventListener("animationend", () => {
  darkMode.style["pointer-events"] = "auto";
  darkMode.classList.remove("animate-dark-mode");
  darkMode.classList.remove("animate-light-mode");
});
