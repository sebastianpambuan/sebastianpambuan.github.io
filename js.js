const menuToggle = document.getElementById("menu-toggle");
const mobileNavbar = document.getElementById("mobile-navbar");
const mobileNavbarClose = document.getElementById("mobile-navbar-close");

menuToggle.addEventListener("click", () => {
    mobileNavbar.classList.add("active");
});

mobileNavbarClose.addEventListener("click", () => {
    mobileNavbar.classList.remove("active");
});

document.querySelectorAll(".mobile-navbar a").forEach((link) => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            mobileNavbar.classList.remove("active");
        }, 350);
    });
});
