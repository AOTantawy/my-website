

const footer = () => {
    const footerElement = document.createElement("footer");
    footerElement.classList.add("footer");
    footerElement.id = "test";
    footerElement.setAttribute("name","Contacts")
    const html = `
        <div class="separator"></div>
        <div class="footer-container">
            <ul class="social-media-list">
                <li><a href="tel:+201093323359"><img src="/partials/footer/icons/phone-call.png" alt="phone-call icon source:flaticon.com" class="icon"></a></li>
                <li><a href="https://github.com/AOTantawy"><img src="/partials/footer/icons/github.png" alt="github icon source:flaticon.com" class="icon"></a></li>
                <li><a href="https://www.linkedin.com/in/aotantawy/"><img src="/partials/footer/icons/linkedin.png" alt="linkedin icon source:flaticon.com" class="icon"></a></li>
                <li><a href="mailto:aotantawy@gmail.com"><img src="/partials/footer/icons/mail.png" alt="mail icon source:flaticon.com" class="icon"></a></li>
                <li><a href="/partials/footer/pdfs/AhmedOsama-CV.pdf" download="AhmedOsama-CV"><img src="/partials/footer/icons/cv.png" alt="cv icon source:flaticon.com" class="icon"></a></li>
                <li><a href="https://twitter.com/aotantawy"><img src="/partials/footer/icons/twitter.png" alt="twitter icon source:flaticon.com" class="icon"></a></li>
            </ul>
            <p class="copy-rights paragraph">
                &copy; ${getCurrentYear()} by Ahmed O. Tantawy
            </p>
        </div>
    `;
    footerElement.innerHTML = html;
    document.querySelector("body").appendChild(footerElement);
    console.log("hey there");
}

const getCurrentYear = () => {
    let date = new Date();
    return date.getFullYear();
}

export default footer;