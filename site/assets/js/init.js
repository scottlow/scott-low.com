$(document).ready(function() {
    "use strict";

    /***************************************************************************/
    /* NAVIGATION  */
    /***************************************************************************/

    $('.button-collapse').sideNav();

    $('.more-container').click(function() {
        $('.collapse-container').toggleClass('collapse');
        $('.more-icon').toggleClass('fa-chevron-circle-right fa-chevron-circle-down')
    });

    var catcher = $('#catcher');
    var sidebar = $('#sidebar');
    var content = $('#content');

    // Sticky Sidebar
    function isScrolledTo(elem) {
        var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top; //num of pixels above the elem
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom + 20 <= docViewBottom));
    }

    function recalculateStickySidebar() {
        if(isScrolledTo(sidebar)) {
            var width = sidebar.outerWidth();
            sidebar.css('position','fixed');
            sidebar.css('top', '-445px');
            sidebar.css('width', width + 'px');
            content.css('position', 'relative');
            content.css('left', width + 'px');
        }
        var stopHeight = catcher.offset().top + catcher.height();
        if (stopHeight > sidebar.offset().top) {
            sidebar.css('position','static');
            sidebar.css('top', 'auto');
            sidebar.css('width', '33.33333%');
            content.css('position', 'static');
            content.css('left', 'auto');
        }
    }

    function shouldEnableStickySidebar() {
        return ($(window).width() > 992 && content.height() > sidebar.height());
    }

    function initStickySidebarOnResize() {
        if(shouldEnableStickySidebar()) {
            $(window).scroll(recalculateStickySidebar);
        } else {
            $(window).off('scroll', recalculateStickySidebar);
            sidebar.css('position','');
            sidebar.css('top', '');
            sidebar.css('width', '');
            content.css('position', '');
            content.css('left', '');
        }
    }

    function initStickySidebarOnLoad() {
        if(shouldEnableStickySidebar()) {
            $(window).scroll(recalculateStickySidebar);
        }
    }

    $(window).resize(function() {
        initStickySidebarOnResize();
    });

    initStickySidebarOnLoad();

    /**************************************************************************
                 SKILL BAR
    **************************************************************************/

    $(".determinate").each(function() {
        var width = $(this).text();
        $(this).css("width", width)
            .empty()
            .append('<i class="fa fa-circle"></i>');
    });


    /**************************************************************************
             BLOG POST
    **************************************************************************/

    jQuery(window).on('load', function() {
        var $ = jQuery;
        $('.blog').masonry({
            itemSelector: '.blog-post',
            columnWidth: '.blog-post',
            percentPosition: true
        });
    });


    var height = $('.caption').height();
    if ($(window).width()) {
        $('#featured').css('height', height);
        $('#featured img').css('height', height);
    }


    /*************************************************************************
                TOOLTIP
    **************************************************************************/
    $('.tooltipped').tooltip({
        delay: 50
    });

    /**************************************************************************
        WOW INIT
    **************************************************************************/

    var wow = new WOW({
        mobile: false
    });
    wow.init();

    /***************************************************************************
          CONTACT FORM
    ***************************************************************************/

    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Sent!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {
                $(this).removeClass();
            });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center fadeInUp animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /**************************************************************************
       Projects
    **************************************************************************/
    var portfolioItem = $('#portfolio-item');
    if(typeof portfolioItem.mixItUp == 'function') {
        portfolioItem.mixItUp();
    }

    $('.sa-view-project-detail').on('click', function(event) {
        event.preventDefault();
        var href = $(this).attr('href') + ' ' + $(this).attr('data-action'),
            dataShow = $('#project-gallery-view'),
            dataShowMeta = $('#project-gallery-view meta'),
            dataHide = $('#portfolio-item'),
            preLoader = $('#loader'),
            backBtn = $('#back-button'),
            filterBtn = $('#filter-button');

        dataHide.animate({
            'marginLeft': '-120%'
        }, {
            duration: 400,
            queue: false
        });
        filterBtn.animate({
            'marginLeft': '-120%'
        }, {
            duration: 400,
            queue: false
        });
        dataHide.fadeOut(400);
        filterBtn.fadeOut(400);
        setTimeout(function() {
            preLoader.show();
        }, 400);
        setTimeout(function() {
            dataShow.load(href, function() {
                dataShowMeta.remove();
                preLoader.hide();
                dataShow.fadeIn(600);
                backBtn.fadeIn(600);
            });
        }, 800);
    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();
        var dataShow = $('#portfolio-item'),
            dataHide = $('#project-gallery-view'),
            filterBtn = $('#filter-button');

        $("[data-animate]").each(function() {
            $(this).addClass($(this).attr('data-animate'));
        });

        dataHide.fadeOut(400);
        $(this).fadeOut(400);
        setTimeout(function() {
            dataShow.animate({
                'marginLeft': '0'
            }, {
                duration: 400,
                queue: false
            });
            filterBtn.animate({
                'marginLeft': '0'
            }, {
                duration: 400,
                queue: false
            });
            dataShow.fadeIn(400);
            filterBtn.fadeIn(400);
        }, 400);
        setTimeout(function() {
            dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
        }, 1500);
    });

});

/***************************************************************************
            MAP
***************************************************************************/

if(typeof google != 'undefined') {
    google.maps.event.addDomListener(window, 'load', init);
}

function init() {
    var lat = 47.6393225;
    var long = -122.1283833;
    var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        center: new google.maps.LatLng(lat, long),
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        map: map,
        title: '1427 11th Avenue'
    });
}