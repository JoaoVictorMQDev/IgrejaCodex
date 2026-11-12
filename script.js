const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollProgress = document.createElement("div");
scrollProgress.className = "scroll-progress";
scrollProgress.setAttribute("aria-hidden", "true");
document.body.prepend(scrollProgress);

let scrollFrame;
const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  header.classList.toggle("scrolled", window.scrollY > 24);
  scrollProgress.style.transform = `scaleX(${progress})`;
  scrollFrame = undefined;
};

const requestScrollUpdate = () => {
  if (scrollFrame === undefined) scrollFrame = requestAnimationFrame(updateScrollState);
};

updateScrollState();
window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate, { passive: true });

const closeMenu = () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  document.body.style.overflow = "";
};

menuButton.addEventListener("click", () => {
  const opening = !nav.classList.contains("open");
  nav.classList.toggle("open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
  document.body.style.overflow = opening ? "hidden" : "";
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll(".section-intro, .schedule-heading, .ministries-heading, .contact-intro").forEach((item) => item.dataset.reveal = "wipe");
document.querySelectorAll(".hero-art, .visit-card, .ministry-card").forEach((item) => item.dataset.reveal = "scale");
document.querySelectorAll(".schedule-item").forEach((item) => item.dataset.reveal = "left");
document.querySelectorAll(".contact-card").forEach((item) => item.dataset.reveal = "right");
document.querySelectorAll(".visit-details > div, .footer-top > div").forEach((item) => item.classList.add("reveal"));

document.querySelectorAll(".values-grid, .schedule-list, .ministries-grid, .contact-options, .visit-details, .footer-top").forEach((group) => {
  [...group.children].forEach((item, index) => {
    if (item.classList.contains("reveal")) item.style.setProperty("--reveal-delay", `${Math.min(index * 60, 180)}ms`);
  });
});

const revealItems = document.querySelectorAll(".reveal");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();
