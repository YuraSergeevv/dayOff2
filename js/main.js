$(document).ready(function () {

    $('.mass_icon').on('click', function () {
        let indx = $(".mass_icon").index(this);
        let mass_icon = document.querySelectorAll('.mass_icon');
        let mass_text = document.querySelectorAll('.header__elements-name');
        let mass_drop = document.querySelectorAll('.drop')
        for (let i = 0; i < mass_icon.length; i++) {
            if (indx == i) {
                mass_icon[i].classList.toggle('line')
                mass_text[i].classList.toggle('header__elements-name-on')
                mass_drop[i].classList.toggle('on')
            } else {
                mass_icon[i].classList.remove('line')
                mass_text[i].classList.remove('header__elements-name-on')
                mass_drop[i].classList.remove('on')
            }
        }
    })

    $('.filter-column').PopupSlider({
        effect: 'fade',
        button: '.filter-show',
        closeButton: '.filter-close',
        container: 'body',
        breakpoint: 1024,
        onMenuOpen: false,
        onMenuClose: false
    });

    $('.filter-select').select2({
        minimumResultsForSearch: -1
    });

    $('.prop-list .prop input').on('change', function () {
        let position = $(this).parent().position();
        let trigger = $('.submit-trigger');
        trigger.css('top', position.top - 10);
        trigger.css('left', position.left + $(this).parent().innerWidth());
        trigger.show();
    })

    var slider = document.getElementById('filter-price');
    var min = $(this).find('[name^=min]');
    var max = $(this).find('[name^=max]');

    noUiSlider.create(slider, {
        start: [100, 2500],
        connect: !0,
        range: {
            'min': 100,
            'max': 2500
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {
        var value = values[handle];
        if (handle) {
            $(max).val(parseInt(value));
        } else {
            $(min).val(parseInt(value));
        }
    });

    slider.noUiSlider.on('change', function (values, handle) {
        $(min).change();
    });
    $(min).on('change', function () {
        slider.noUiSlider.set([this.value, null])
    });
    $(max).on('change', function () {
        slider.noUiSlider.set([null, this.value])
    });

    $('.more').on('click touchend', function () {
        $(this).toggleClass('active')
        $('.description').slideToggle();
        return false;
    })
    $('.new-card__icon').on('click touchend', function () {
        $(this).toggleClass('like__yellow')
        $('.description').slideToggle();
        return false;
    })
    $('.top-card__icon').on('click touchend', function () {
        $(this).toggleClass('like__black')
        $('.description').slideToggle();
        return false;
    })


    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }

    };


    select();

    $('.slider__inner').each(function (index) {
        $('.slider', $(this)).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        })
    });
    $('.slider__inner-MB').each(function (index) {
        $('.slider', $(this)).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        })
    });


    $('.new-slider__inner').each(function (index) {
        $('.new-slider', $(this)).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        vertical: true,
                    }
                }
            ]
        })
    });

    $('.top-slider__inner').each(function (index) {
        $('.top-slider', $(this)).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
    });

    $('.drinks-slider__inner').each(function (index) {
        $('.drinks-slider', $(this)).slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }

                }]

        })
    });

    $('.favorites-slider__inner').each(function (index) {
        $('.favorites-slider', $(this)).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }

                }]
        })
    });

    $('.new-slider-wrap').each(function (index) {

        $('.new-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }

                }]
        });

    });


    $('.drinks-slider__inner-MB').each(function (index) {
        $('.drinks-slider-MB', $(this)).slick(
            {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                swipeToSlide: true,
                responsive: [{
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            })
    });


    $('.top-card__icon').click(function (elem) {
        elem.preventDefault();
        $(this).toggleClass('actives');
    });

    $(".wrapper-input-number").each(function () {
        let $quantityArrowMinus = $(this).find(".quantity-arrow-minus");
        let $quantityArrowPlus = $(this).find(".quantity-arrow-plus");
        let $quantityNum = $(this).find('.quantity-num')

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            if ($quantityNum.val() < 30000) {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        }
    });

    $('.prop-title').on('click touchend', function () {
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
        return false;
    })

    $('.validation-field input[type="text"],.validation-field input[type="number"],.validation-field textarea').on("blur", function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
    }).each(function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
        if ($(this).attr("placeholder") && $(this).attr("placeholder").indexOf('*') != -1) {
            var placeholder = $(this).attr("placeholder");
            $(this).next(".placeholder").text(placeholder);
        }
    });
});
$('.top__input-phone').mask('(000)000-00-00');