function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

const name = "Tasmir Hossain Zihad";
const nameContainer = document.getElementById("animatedName");
name.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.opacity = 0;
  span.style.transition = `opacity 0.3s ease ${i * 50}ms`;
  nameContainer.appendChild(span);
  setTimeout(() => (span.style.opacity = 1), i * 50);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".card").forEach((el) => observer.observe(el));
