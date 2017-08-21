$(document).ready(function() {

    $(".city-dropbtn").click(function () {
        $(".dropdown-content").toggleClass("visible-dropdown");
    });

    $(".mob-nav-link").click(function () {
        $(".navbar-area-cover").toggleClass("visible-navbar");
    });

    //owl-carousel
    $(".owl-carousel").owlCarousel();

    //nav hover dropdown
    $(".item-link").click(function(){
       $('.inner-list').toggleClass('active-inner-dropdown');}
    );

    //variant of toggle on click for multiple navbar

    // $('.item-link').click(function(event){
    //     event.stopPropagation();
    //     var dropdown = $(this).children('.active-inner-dropdown');
    //     dropdown.toggleClass();
    // });

    // $(".item-link").click(function () {
    //     $('.inner-list').toggleClass("active-inner-dropdown");
    //     // $('.inner-list').removeClass("active-inner-dropdown");
    //     $(this).siblings('.inner-list').removeClass("active-inner-dropdown");
    //     // $(this).siblings('.inner-list').addClass("active-inner-dropdown");
    // });

    // $('a.item-link').click(function(){
    //     $(this).find('.inner-list').addClass('active-inner-dropdown');
    //     $(this).siblings().removeClass('active-inner-dropdown');
    // });

    // $('.item-link').on('click', function () {
    //     $(this).find('.inner-list').toggleClass('active-inner-dropdown');
    // });


    //owl carousel item count
    $('.owl-carousel').on('changed.owl.carousel', function(e) {
        if (!e.namespace || e.property.name != 'position') return
        $('#info').text(e.relatedTarget.relative(e.item.index) + ' из ' + e.item.count)
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    slideSpeed: 500,
    autoplayHoverPause: true,
    autoplay:true,
    pagination : true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
