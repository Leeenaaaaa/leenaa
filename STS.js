
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}




let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        Delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        Delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        Delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 800,
});

ScrollReveal().reveal(".navbar", {
    origin: "top",
});

ScrollReveal().reveal(
    "",
    {
        origin: "bottom",
    }
);

ScrollReveal().reveal("", {
    origin: "left",
});

ScrollReveal().reveal("", {
    origin: "right",
});
