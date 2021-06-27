
const aboutMe = () => {
    console.log("hello man");
    const section = document.createElement("section");
    section.classList.add("about-me");
    const html = `
        <div class="banner">
            <img src="/sections/about-me/about-me.jpg" alt="unsplash desk background" class="banner-img">
            <h4 class="level-two-header banner-text">About Me</h4>
       </div>
       <p class="paragraph">
        In 2016 I started my career after joining the faculty of computers and information system Cairo University; back in this
        time I have been introduced to some of the programming languages like c++, java, and python and also deep dive into
        fundamental concepts like data structures, algorithms, OOP, and much more, after gaining some experience in programming
        in general and competitive programming in particular, I participate in ACM (programming competition).
       </p>
       <p class="paragraph">
        The second milestone in my career path was when I decided to learn web development, so after capturing some core
        concepts like client/server architecture, Protocols, and APIs, then I learned different languages and frameworks like
        Node.js Express.js and Python Django those for web services while for database server I used SQL databases like MYSQL
        and NoSQL databases like MongoDB.
       </p>
       <p class="paragraph">Currently, I develop some projects to sharpen my skills and read more about architecture, and later I will dive into OOD
        and design patterns.</p>
    `;
    section.innerHTML = html;
    document.querySelector("body").appendChild(section);
}

export default aboutMe;