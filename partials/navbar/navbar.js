

const navbar = () => {
    const allSections = document.querySelectorAll('*[id]');
    const navbarElement = document.createElement("nav");
    navbarElement.classList.add("nav-bar");
    let html = `        
            <div class="nav-bar-container">
            <a href="#"><img src="/partials/navbar/logo.png" alt="ahmed osama logo transparent background" class="nav-logo"></a>
            <ul class="nav-bar-items">`;
    
    allSections.forEach(section => {
        html += `<li><a href="#${section.id}" class="nav-link">${section.getAttribute("name")}</a></li>`;
    })

    html += `
        </ul>
        </div>`;
    
    navbarElement.innerHTML = html;
    console.log(navbarElement);
    document.querySelector("body").appendChild(navbarElement);
}


export default navbar;