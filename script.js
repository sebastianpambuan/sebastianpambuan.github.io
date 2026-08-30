document.getElementById("current-year").textContent = new Date().getFullYear();

const contactLinks = document.querySelectorAll('.contact-list li a');

contactLinks.forEach((link) => {
  const icon = link.querySelector('img');
  if (!icon) return;

  const defaultSrc = icon.dataset.default || icon.src;
  const hoverSrc = icon.dataset.hover || defaultSrc;

  link.addEventListener('mouseenter', () => {
    icon.src = hoverSrc;
  });

  link.addEventListener('mouseleave', () => {
    icon.src = defaultSrc;
  });
});
