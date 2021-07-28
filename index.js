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

const body = document.querySelector("body");
const themeColor = document.querySelector('meta[name="theme-color"]');
const darkMode = document.querySelector("#enable-dark");
const icons = document.querySelectorAll(".icon path");
const darkColorCode = "#222429";
const lightColorCode = "#ffffff";
let isDark = false;

darkMode.onclick = () => {
  darkMode.style["pointer-events"] = "none";
  if (!isDark) {
    darkMode.classList.add("animate-dark-mode");
    themeColor.setAttribute("content",darkColorCode);
  } else {
    darkMode.classList.add("animate-light-mode");
    themeColor.setAttribute("content",lightColorCode);
  }

  body.classList.toggle("dark-mode");
  icons.forEach((icon) => {
    icon.style.fill = isDark ? darkColorCode : lightColorCode;
  });
  isDark = !isDark;
};

darkMode.addEventListener("animationend", () => {
  darkMode.style["pointer-events"] = "auto";
  darkMode.classList.remove("animate-dark-mode");
  darkMode.classList.remove("animate-light-mode");
});
