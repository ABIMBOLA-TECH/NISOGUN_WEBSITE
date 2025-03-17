document.getElementById('scrollup').addEventListener('click',
    function() {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      });
    });


    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");
    
    
    [openMenuBtn, closeMenuBtn].forEach((btn) => {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
            menu.style.transition = "transform 0.5s ease";
        });
    
    });
    menu.addEventListener("transitionend", function() {
        this.removeAttribute("style");
    });
    
    menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
        arrow.addEventListener("click", function() {
            this.closest(".dropdown").classList.toggle("active");
        });
    });





    document.addEventListener("DOMContentLoaded", function () {
        // Select all the navigation links
        const navLinks = document.querySelectorAll("nav.menu a[href^='#']");
    
        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default anchor click behavior
    
                // Get the target section ID from the href attribute
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
    
                // Scroll to the target section
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
    
                // Optional: Close the menu after navigation
                const menu = document.querySelector("nav.menu");
                menu.classList.remove("open"); // Assuming 'open' is the class that makes the menu visible
            });
        });
    
        // Mobile menu toggle button
        const openMenuBtn = document.querySelector(".open-menu-btn");
        const closeMenuBtn = document.querySelector(".close-menu-btn");
    
        if (openMenuBtn && closeMenuBtn) {
            const menu = document.querySelector("nav.menu");
    
            openMenuBtn.addEventListener("click", () => {
                menu.classList.add("open");
            });
    
            closeMenuBtn.addEventListener("click", () => {
                menu.classList.remove("open");
            });
        }
    });
    





    const toggleButton = document.getElementById("toggleMode");
    const mapContainer = document.querySelector(".mapside");
    let isDarkMode = false;

    toggleButton.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        mapContainer.classList.toggle("dark-mode", isDarkMode);
        mapContainer.classList.toggle("light-mode", !isDarkMode);

        // Update button text
        toggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    });

