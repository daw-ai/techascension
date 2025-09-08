document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
            mobileMenuToggle.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                nav.classList.remove("active");
                mobileMenuToggle.classList.remove("active");
            });
        });
    }

    // Add class to header on scroll
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});


