// Scroll suave para navegación
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});
