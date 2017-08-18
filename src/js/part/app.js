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

    

});