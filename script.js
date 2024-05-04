document.addEventListener("DOMContentLoaded", function() {
    // Get header element
    var header = document.getElementById("header");
    
    // Get the offset position of the header
    var sticky = header.offsetTop;
    
    // Add scroll event listener
    window.addEventListener("scroll", function() {
        // If the user scrolls down, add "sticky" class to header
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            // Otherwise, remove the "sticky" class
            header.classList.remove("sticky");
        }
    });
    
    // Smooth scroll to section on click
    var navLinks = document.querySelectorAll("#header #nav #nav-bar ul li a");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(e) {
            
            e.preventDefault();
            var target = this.getAttribute("href");
            document.querySelector(target).scrollIntoView({
                
                behavior: "smooth"
            });
        });
    });
});
