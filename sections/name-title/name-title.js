const nameTitle = () => {
  const section = document.createElement("section");
  section.classList.add("name-title");
  const html = `
        <img src="/ahmed-osama-pic.jpg" alt="ahmed osama profile picture" class="profile-pic">
        <h3 class="level-one-header">Ahmed Osama Tantawy</h3>
        <h4 class="level-two-header">Software Engineer</h4>`;
  section.innerHTML = html;

  document.querySelector("body").appendChild(section);
};

export default nameTitle;
