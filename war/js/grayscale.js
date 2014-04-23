//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


        //Google maps
                var mapOptions = {
                    zoom: 15,
                    center: new google.maps.LatLng(-11.956354, -76.986088)
                };
                var map = new google.maps.Map(document.getElementById('gmaps-canvas'),
                    mapOptions);

                var marker;                    
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(-11.956354, -76.986088),
                    map: map
                });
