const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const progress = document.getElementById("progress");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const top = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height ? (top / height) * 100 : 0}%`;
});

const items = document.querySelectorAll(".world, .story-frame, .contact-box, .socials a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(22px)";
  item.style.transition = "opacity .75s cubic-bezier(.2,.8,.2,1), transform .75s cubic-bezier(.2,.8,.2,1)";
  observer.observe(item);
});
