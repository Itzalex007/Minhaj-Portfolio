// console.log("Hello World again");


let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bxs-x-circle')
    navbar.classList.toggle('active')
}




let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)




    menuIcon.classList.remove('bxs-x-circle')
    navbar.classList.remove('active')

}
ScrollReveal({
     reset: true ,
     distance: '80px',
     duration:2000,
     delay:200 
});
ScrollReveal().reveal('.home-content, .about-content, .heading, .services-container', {origin:'top' });
ScrollReveal().reveal(' .home-img, .about-img, .project-container, form, .services-container', {origin:'bottom' });
ScrollReveal().reveal(' p ', {origin:'left' });
ScrollReveal().reveal(' h1', {origin:'right' });

const typed = new Typed('.multiple-text',{
    strings: ['FrontEnd Developer' , 'WordPress Developer', 'WIX Developer', 'Shopify Developer', 'React Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 30,
    loop : true
})



// Add an event listener to check when the user scrolls
window.addEventListener("scroll", function() {
    var homeSection = document.getElementById("home");
    var aboutSection = document.getElementById("about");
    var button = document.getElementById("scrollToTop");

    if (window.scrollY >= homeSection.offsetTop && window.scrollY < aboutSection.offsetTop ) {
        button.style.display = "none";
    } else {
        button.style.display = "block";
    }
});

// Add an event listener to scroll to the home section when the button is clicked
document.getElementById("scrollToTop").addEventListener("click", function() {
    var homeSection = document.getElementById("home");
    window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth"
    });
});


// || window.scrollY >= homeSection.offsetTop && window.scrollY < contactSection.offsetTop || window.scrollY >= homeSection.offsetTop && window.scrollY < projectSection.offsetTop || window.scrollY >= homeSection.offsetTop && window.scrollY < servicesSection.offsetTop