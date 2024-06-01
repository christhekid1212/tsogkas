document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const pageContent = document.querySelector(".page-content");

    function updateNavBarBackground() {
        const scrollPosition = window.scrollY;

        const scrollThreshold = 100;

        if (scrollPosition > scrollThreshold) {
            nav.style.background = "rgb(26, 47, 71)"; 
        } else {
            nav.style.background = "transparent";
        }
    }

    window.addEventListener("scroll", updateNavBarBackground);
   
    updateNavBarBackground();
});