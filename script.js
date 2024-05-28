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

    var navLinks = document.querySelectorAll("#header #nav-bar ul li a");
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
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observerAbous = new IntersectionObserver((entries,observer) => {
        entries.forEach((entry)=>{
            console.log('show-about',entry)
            if(entry.isIntersecting){
                const liItems = entry.target.querySelectorAll('li');
                liItems.forEach((li, index) => {
                    setTimeout(() => {
                        li.classList.add('show-about');
                    }, index * 200); // 200ms staggered delay
                });
                observer.unobserve(entry.target);
            }
            else{
                entry.target.classList.remove('show-about');
            }
        })
    },observerOptions);
    const hiddenElementsAbout = document.querySelectorAll('.about-us');
    hiddenElementsAbout.forEach((el)=>observerAbous.observe(el))


    // showcase text 
    const showcaseText = document.querySelector('.showcase-text');

    // Add the in-view class on page load
    window.addEventListener('load', function() {
        showcaseText.classList.add('in-view');
    });

    // Also add the in-view class when the element is scrolled into view
    const observerOptions1 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions1);

    observer1.observe(document.querySelector('.showcase-text'));
 
});

