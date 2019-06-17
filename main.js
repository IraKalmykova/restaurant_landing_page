let scrollUp = document.querySelector('button.button-up');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
        scrollUp.style.transform = 'translateY(0px)';
    }

    else {
        scrollUp.style.transform = 'translateY(200px)';
    }
});

scrollUp.addEventListener('click', function () {
    window.scrollTo(0, 0)
});