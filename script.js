console.log('script file')


document.querySelector('.signup_button').addEventListener('click', function () {
    console.log('click on signup button')
    document.querySelector('#signup_popup').classList.add('show_signup')
})

document.querySelector('.sign_close').addEventListener('click', function () {
    console.log('close signup popup')
    document.querySelector('#signup_popup').classList.remove('show_signup')
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mc_rgt-col");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}