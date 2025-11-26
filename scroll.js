const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.remove("fade-out");
        } else {
            entry.target.classList.remove("active");
            entry.target.classList.add("fade-out");
        }
    });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
