document.addEventListener("DOMContentLoaded", function() {
    // Get header element
    var header = document.getElementById("header");
    
    // Get the offset position of the header
    var sticky = header.offsetTop;
    // Add scroll event listener
    window.addEventListener("scroll", function() {
        // If the user scrolls down, add "sticky" class to header
        console.log('content');
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            // Otherwise, remove the "sticky" class
            header.classList.remove("sticky");
        }
    });
    // window.addEventListener('scroll', function()  {
    //     const content = document.getElementById('content-desc');
    //     console.log('content',content);
    //     const triggerPoint = window.innerHeight * 0.7; // Adjust as needed
        
    //     // If scrolled past 70% of the viewport height
    //     if (window.scrollY > triggerPoint) {
    //         console.log('in hsw')
    //       content.classList.add('show'); // Show content
    //     }
    //   });
    
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
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log('entry',entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show');
            }
        })
    })
    const hiddenElements = document.querySelectorAll('.experience-data');
    hiddenElements.forEach((el)=>observer.observe(el))

    const observerImage = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log('image',entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show-image')
            }
            else{
                entry.target.classList.remove('show-image');
            }
        })
    })
    const hiddenElementsImage = document.querySelectorAll('.tooltip');
    hiddenElementsImage.forEach((el)=>observerImage.observe(el))

    const observerImageRight = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log('image-right',entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show-image-right')
            }
            else{
                entry.target.classList.remove('show-image-right');
            }
        })
    })
    const hiddenElementsImageRight = document.querySelectorAll('.tooltip-right');
    hiddenElementsImageRight.forEach((el)=>observerImageRight.observe(el))

    const observerAbous = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            console.log('show-about',entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show-about')
            }
            else{
                entry.target.classList.remove('show-about');
            }
        })
    })
    const hiddenElementsAbout = document.querySelectorAll('.content-description');
    hiddenElementsAbout.forEach((el)=>observerAbous.observe(el))

 
});

