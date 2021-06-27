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
const icons = document.querySelectorAll(".icon");

darkMode.onclick = () => {
    document.querySelector("body").classList.toggle("dark-mode");
    darkMode.classList.add("animate-dark-mode");
    addDarkModeIcons();
    darkMode.classList.remove("animate-dark-mode");
}

const addDarkModeIcons = () => {
    icons.forEach(icon => {
        let mainSrc = icon.src;
        let index = mainSrc.lastIndexOf(".");
        let newSrc = mainSrc.includes("-dark")?removeDarkPath(mainSrc):addDarkPath(mainSrc,index);
        console.log(newSrc);
        icon.src = newSrc;
    })
}

const addDarkPath = (path,index) => {
    return path.slice(0,index) + "-dark" + path.slice(index);
}

const removeDarkPath = (path) => {
    return path.replace("-dark","");
}