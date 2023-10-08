
function orderPizza(pizzaName) {
    const message = `You ordered a ${pizzaName}! Enjoy your meal! 🍕`;
    document.getElementById("order-message").innerText = message;
    
}


const slideshowImages = ["pizza1.jpg", "pizza2.jpg", "pizza3.jpg"];
let currentSlide = 0;

function changeSlide() {
    currentSlide = (currentSlide + 1) % slideshowImages.length;
    document.querySelector('.menu img').src = slideshowImages[currentSlide];
}

setInterval(changeSlide, 3000);

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".nav-links li a");
    
    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        const id = section.getAttribute("id");
        
        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
            navbarLinks[index].classList.add("active");
        } else {
            navbarLinks[index].classList.remove("active");
        }
    });
});

function orderPizza(pizzaName) {
    const message = `You ordered a ${pizzaName}! Enjoy your meal! 🍕`;
    document.getElementById("order-message").innerText = message;
}
