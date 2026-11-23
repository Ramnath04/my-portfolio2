
// ==========================================
// VERMA RAMNATH - PORTFOLIO JAVASCRIPT
// ==========================================


// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerText = isOpen ? "✕" : "☰";

});


// 2. CLOSE MENU WHEN A LINK IS CLICKED

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerText = "☰";

    });

});


// 3. CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", function (event) {

    const clickedInsideMenu = navLinks.contains(event.target);

    const clickedMenuButton = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerText = "☰";

    }

});


// 4. CONTACT FORM FUNCTIONALITY

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formMessage.innerText = "Please fill in all fields.";

        return;

    }

    formMessage.innerText =
        "Thank you, " + name + "! Your message details are ready.";

    contactForm.reset();

});


// 5. AUTOMATIC FOOTER YEAR

const year = document.getElementById("year");

year.innerText = new Date().getFullYear();


// 6. SCROLL TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// 7. WELCOME MESSAGE

console.log("Welcome to Verma Ramnath's Portfolio!");

