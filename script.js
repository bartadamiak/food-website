const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-navigation-menu");
const menuElements = menu.querySelectorAll("p");
const orderBtn = document.querySelectorAll(".order-btn");
const contactUs = document.querySelector("#contact-us");
const scrollDown = document.querySelector("#scroll-down");
const ourFood = document.querySelector("#our-food");

const aboutBtn = document.querySelector("#about-btn");
const ourFoodBtn = document.querySelector("#our-food-btn");
const plansBtn = document.querySelector("#plans-btn");
const contactBtn = document.querySelector("#contact")

const about = document.querySelector(".header");
const plans = document.querySelector(".plans");


aboutBtn.addEventListener("click", function(e) {
    about.scrollIntoView();
});

ourFoodBtn.addEventListener("click", function(e) {
    ourFood.scrollIntoView()
});

plansBtn.addEventListener("click", function(e) {
    plans.scrollIntoView()
});

contactBtn.addEventListener("click", function(e) {
    contactUs.scrollIntoView()
})

menuElements.forEach(element => {
    element.addEventListener("click", function() {
        if (menu.classList.contains("mobile-menu")) {
            menu.classList.toggle("mobile-menu");
            menu.classList.toggle("mobileIn");
            
        }
        else {
            return false
        }
    })
});

hamburger.addEventListener("click", function(e) {   
    menu.classList.toggle("mobile-menu");
    menu.classList.toggle("mobileIn")
 
});

orderBtn.forEach(element => {
    element.addEventListener("click", function(e) {
        contactUs.scrollIntoView();
    })
});

scrollDown.addEventListener("click", function() {
    ourFood.scrollIntoView();
})