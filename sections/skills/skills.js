import data from "./skills-data.js";

const skills = () => {
    const section = document.createElement("section");
    section.classList.add("skills");
    section.id = "skills-section";
    section.setAttribute("name","Skills");
    let html = `<div class="banner">
            <img src="/sections/skills/skills.jpg" alt="unsplash skills" class="banner-img">
            <h4 class="level-two-header banner-text">Skills</h4>
        </div>
        ${addSkillsAsHTML()}
        `;
    section.innerHTML = html;
    document.querySelector("body").appendChild(section);

}

const addSkillsAsHTML = () => {
    let html = `<div class="skills-container">`;
    data.groups.forEach(skill=> {
        let tempString = `<div class="skill-group">
                <h6 class="level-three-header">${skill.groupName}</h6>
                <ul>`;
        tempString += convertArraytoHTMLStr(skill.groupSkills);
        tempString += `</ul>
            </div>`;
        html += tempString;

    });
    html += `</div>`;
    return html;

}

const convertArraytoHTMLStr = (arr) => {
    let html = "";
    arr.forEach(item => {
        html += `<li>${item}</li>`;
    });
    return html;
}

export default skills;