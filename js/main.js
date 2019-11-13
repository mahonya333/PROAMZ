$(function () {
    $('.slider__items').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt=""> prev</button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt=""> next</button>',
    });
    $(".slider__items").on('afterChange', function(event, slick, currentSlide){
        $(".slider-number span").text(currentSlide + 1);
     });
     $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    });
});