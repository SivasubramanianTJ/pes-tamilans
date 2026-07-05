document.addEventListener("DOMContentLoaded", () => {
    
    // --- Sticky Header Logic ---
    const header = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- Scroll Reveal Animation ---
    // Sets up an Intersection Observer to detect when elements enter the viewport
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slightly offset trigger point
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it fades in
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });
});