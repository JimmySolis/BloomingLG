const nav = document.querySelector(".nav");
const navContainer = document.querySelector(".nav_container");
const sticky = document.querySelector(".sticky");
// const btnScrollToTop = document.querySelector("#btnScrollToTop");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if ( lastScrollY < window.scrollY ){
        nav.classList.add("nav--hidden");
        navContainer.classList.add("nav--hidden");
        sticky.classList.add("sticky--hide");
    } else if( lastScrollY   < window.scrollY ) {
        nav.classList.remove("nav--hidden");
        navContainer.classList.remove("nav--hidden");
        nav.classList.add("nav--trans");
        navContainer.classList.add("nav--trans");
        sticky.classList.remove("sticky--hide");
        sticky.classList.add("sticky--show");
    } 

    lastScrollY = window.scrollY;
});


// btnScrollToTop.addEventListener("click", function (){
//     window.scrollTo(0,0)
// })