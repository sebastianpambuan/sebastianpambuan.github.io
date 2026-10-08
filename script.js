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

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

document.getElementById("current-year").textContent = new Date().getFullYear();

function openCertificate(image) {
  const modal = document.getElementById("certificate-modal");
  const fullImage = document.getElementById("certificate-full");

  fullImage.src = image.src;
  fullImage.alt = image.alt;

  modal.style.display = "flex";
}

function closeCertificate(event) {
  if (
    event.target.id === "certificate-modal" ||
    event.target.classList.contains("certificate-close")
  ) {
    document.getElementById("certificate-modal").style.display = "none";
  }
}
