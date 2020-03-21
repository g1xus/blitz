// Работа навигционного меню
$('.cmn-toggle-switch').on('click', function(e) {
        e.preventDefault();
        $('.nav').toggleClass('nav_active');
        $('.content-wrapper').toggleClass('content-wrapper_active');
        $('.cmn-toggle-switch__htx').toggleClass('active');
})

$('a[href$="#all"').on('click', function() {
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#all"').toggleClass('works-types__item_active');
        $('.works-cards-item').css('display', 'inline');
})
$('a[href$="#web"').on('click', function() {
        $('.works-cards-item').css('display', 'inline')
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#web"').toggleClass('works-types__item_active');
        $('.works-cards-item').not('.web').css('display', 'none');
})
$('a[href$="#print"').on('click', function() {
        $('.works-cards-item').css('display', 'inline')
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#print"').toggleClass('works-types__item_active');
        $('.works-cards-item').not('.print').css('display', 'none');
})
$('a[href$="#art"').on('click', function() {
        $('.works-cards-item').css('display', 'inline')
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#art"').toggleClass('works-types__item_active');
        $('.works-cards-item').not('.art').css('display', 'none');
})
$('a[href$="#photoshop"').on('click', function() {
        $('.works-cards-item').css('display', 'inline')
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#photoshop"').toggleClass('works-types__item_active');
        $('.works-cards-item').not('.photoshop').css('display', 'none');
})
$('a[href$="#dev"').on('click', function() {
        $('.works-cards-item').css('display', 'inline')
        $('.works-types__item').removeClass('works-types__item_active');
        $('a[href$="#dev"').toggleClass('works-types__item_active');
        $('.works-cards-item').not('.dev').css('display', 'none');
})