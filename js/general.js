const _navFixed = $('.nav.fixed');
const _toTop = $('.js-totop');
const _navLink = $('.nav-link');
const _vitualMenu = $('.right-content');
const _hamburger = $('.hamburger');

$(window).on("scroll", function() {
    let _h = $(window).scrollTop();
    _h > 1 ? _navFixed.addClass("active") : _navFixed.removeClass("active");
    // let _navTop = _fixed.offset().top;

    // console.log(_fixedTop);

});

_navLink.on("click", function(e) {
    e.preventDefault();
    let _target = $(this).attr('href');
    let _offsetTop = $(_target).offset().top;
    _goto(_offsetTop - 40);
    console.log($(this), $(_target));
});

_toTop.on("click", function() {
    _goto(0);
});

_hamburger.on('click', function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        _vitualMenu.removeClass('active');
    } else {
        $(this).addClass('active');
        _vitualMenu.addClass('active');
    }
});

function _goto(_tar) {
    $("html,body").animate({
            scrollTop: _tar,
        },
        1000,
        "swing"
    );
}