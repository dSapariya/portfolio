document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    
    var sticky = header.offsetTop;
    window.addEventListener("scroll", function() {
        console.log('content');
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

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

    const observerEducation = new IntersectionObserver((entries) => {
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
    const hiddenElementsEducation = document.querySelectorAll('.education-data');
    hiddenElementsEducation.forEach((el)=>observerEducation.observe(el))

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

