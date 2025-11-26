window.onload = () => {
    const loader = document.getElementById("loader-screen");

    setTimeout(() => {
        loader.classList.add("hidden-loader");
    }, 1500); // keep loader visible for 1.5 sec
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});