$(document).ready(function() {
    $('.tab-select').on('click', function() {
        var _parents = $(this).parents('.tabs');
        var _this = $(this);

        _parents.find('.tab-select').removeClass('active');
        _this.addClass('active');

        var idx = _this.index();

        _parents.find('.tab-one').hide().eq(idx).show();
    });

    var matchSlider = new Swiper('.match-list', {
        spaceBetween: 20,
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $('.tab-one').eq(1).hide();

    var newsSlider = new Swiper('.news-slider', {
        spaceBetween: 60,
        slidesPerView: 1,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $('.spoiler-title').on('click', function() {
        $(this).toggleClass('open').parents('.spoiler').
        find('.spoiler-hidden')
        .slideToggle();
        if ( $(this).hasClass('open') ) {
            $(this).text('Скрыть биографию');
        } else {
            $(this).text('Биография');
        }
    });

    /*setTimeout(function() {
        $('.photos').masonry({
            columnWidth: 210,
            itemSelector: '.photo',
            gutter: 25
        });
    }, 50)*/


    $('.photos').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true,
            tPrev: 'Назад',
            tNext: 'Вперед',
            tCounter: '%curr% / %total%'
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });

    $('.video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.player__position').each(function() {
        text = $(this).text();
        $(this).text(text.replace(/(?:&nbsp;|<br>)/g,''))
    });

    $('.video__img').on('click', function() {
        id = $(this).find('video').attr('id');
        video = document.getElementById(id);
        if (video.paused) {
            video.play();
            $(this).addClass('played');
        } else {
            video.pause();
            $(this).removeClass('played');
        }
    });

   /* menuLength = $('.head-menu a').length;
    if ( menuLength <= 5 ) {
        menuWidth = 960 / menuLength;
        $('.head-menu a').css('width', menuWidth+'px')
    }*/

    $('.table-one-hide').on('click', function() {
        $(this).next().slideToggle();
    });

});