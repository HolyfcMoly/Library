import "../core";

$.prototype.carousel = function () {
    for (let i = 0; i < this.length; i++) {
        const width = Math.floor(parseInt(window.getComputedStyle(this[i].querySelector(".carousel-inner")).width))
        const slides = this[i].querySelectorAll(".carousel-items");
        const slidesField = this[i].querySelector(".carousel-slides");
        const dots = this[i].querySelectorAll(".carousel-indicators li");

        slidesField.style.width = 100 * slides.length + "%";
        slides.forEach((slide) => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        const dotsClass = () => {
            dots.forEach((dot) => dot.classList.remove("active"));
            dots[slideIndex].classList.add("active");
        };

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset === width * (slides.length - 1)) {
                offset = 0;
                slideIndex = 0;
            } else {
                offset += width;
                slideIndex++;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            dotsClass();
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset === 0) {
                offset = width * (slides.length - 1);
                slideIndex = slides.length - 1;
            } else {
                offset -= width;
                slideIndex--;
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
            dotsClass();
        });

        const sliderId = this[i].getAttribute("id");
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            
                slideIndex = slideTo;
                offset = width * slideTo;
                slidesField.style.transform = `translateX(-${offset}px)`;
                dotsClass();
        });

        if (dots.length > 0) {
            dots[slideIndex].classList.add("active");
        }
    }
};

$(".carousel").carousel();
