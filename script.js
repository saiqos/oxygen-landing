const lines = document.querySelectorAll('.expertise__statistics-item-line_active');
const valuesOfLines = document.querySelectorAll('.values-of-lines');
const portfolioItems = document.querySelectorAll('.portfolio__item');
const textArea = document.querySelector('.contact__form-textarea');
const goTopBtn = document.querySelector('.footer__btn');

goTopBtn.onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = () => {
    textArea.textContent = '';
}

let heightForPortfolioItems = [
    494, 395, 288, 288, 292, 367, 523, 318, 572
]

function addValues() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.width = valuesOfLines[i].innerHTML;
    }
}
function setHeightForPortfolioItems() {
    portfolioItems.forEach((value, index, array) => {
        value.style.height = `${heightForPortfolioItems[index]}px`;
    })
}
setHeightForPortfolioItems();
addValues();


// slider

$(document).ready(function () {
    $('.featured-project__content').slick({
        dots: true
    });
});


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__nav').toggleClass('active');
        $('.logo').toggleClass('logo_fixed');
        $('body').toggleClass('lock');
    });
});


