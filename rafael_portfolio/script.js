const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backTop = document.getElementById("backTop");
const year = document.getElementById("year");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});
