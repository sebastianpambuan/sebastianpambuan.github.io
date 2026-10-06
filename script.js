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

const contactLinks = document.querySelectorAll(".contact-list li a");

contactLinks.forEach((link) => {
  const icon = link.querySelector("img");
  if (!icon) return;

  const defaultSrc = icon.dataset.default || icon.src;
  const hoverSrc = icon.dataset.hover || defaultSrc;

  link.addEventListener("mouseenter", () => {
    icon.src = hoverSrc;
  });

  link.addEventListener("mouseleave", () => {
    icon.src = defaultSrc;
  });
});

document.getElementById("current-year").textContent = new Date().getFullYear();
