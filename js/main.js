$(function () {
    // var wow = new WOW({ offset: 100, mobile: false }); 
    // wow.init();
    // $(window).on('load', function () {
    //     $('#preloader').fadeOut(700);
    // });

    //preloader

    // preload.className = "preloader";

    // preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';

    // document.body.appendChild(preload);

    // window.addEventListener('load', function () {
    //     preload.className += ' fade';
    //     preload.style.display = 'none';
    //     console.log('Done')

    // })

    // window.addEventListener ?
    //     window.addEventListener("load", yourFunction, false) :
    //     window.attachEvent && window.attachEvent("onload", yourFunction);

    //Chose active li

    var liItems = [];
    var sectionIds = [];
    var a = document.querySelectorAll('li a');
    var explUs = document.querySelector('#explore_us')

    function addToArray() {
        for (let i = 0; i < a.length; i++) {
            menuScrollEvent(a[i]);
        }
    }
    addToArray();

    function explUs() {
        for (let i = 0; i < a.length; i++) {
            a[i].parentNode.classList.remove('active')
        }
        if (window.innerWidth < 769) {
            a[1].parentNode.classList.add('active')
            let href = "#about-us"
            let scrollH = document.querySelector(href).offsetTop
            let menuH = 90
            let scrollTop = scrollH - menuH

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1000);
        }
        else {
            a[1].parentNode.classList.add('active')
            let href = "#about-us"
            let scrollH = document.querySelector(href).offsetTop
            let menuH = document.getElementById('#primary-menu').offsetHeight
            let scrollTop = scrollH - menuH

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1000);
        }
    }

    try {
        explUs.addEventListener('click', function () {
            for (let i = 0; i < a.length; i++) {
                a[i].parentNode.classList.remove('active')
            }
            if (window.innerWidth < 769) {
                a[1].parentNode.classList.add('active')
                let href = "#about-us"
                let scrollH = document.querySelector(href).offsetTop
                let menuH = 90
                let scrollTop = scrollH - menuH

                $('html, body').animate({
                    scrollTop: scrollTop
                }, 1000);
            }
            else {
                a[1].parentNode.classList.add('active')
                let href = "#about-us"
                let scrollH = document.querySelector(href).offsetTop
                let menuH = document.getElementById('#primary-menu').offsetHeight
                let scrollTop = scrollH - menuH

                $('html, body').animate({
                    scrollTop: scrollTop
                }, 1000);
            }
        })
    }
    catch {
    }


    function menuScrollEvent(elem) {
        elem.addEventListener('click', function () {
            checkActiveSection(event);
        })
    }

    function checkActiveSection(event) {
        for (let i = 0; i < a.length; i++) {
            a[i].parentNode.classList.remove('active')
        }
        event.target.parentNode.classList.add('active')
        if (window.innerWidth < 769) {
            document.getElementsByTagName('nav')[0].classList.remove('show-menu')
            let href = event.target.getAttribute("href")
            let scrollH = document.querySelector(href).offsetTop
            let menuH = 90
            let scrollTop = scrollH - menuH

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1000);
        }
        else {
            let href = event.target.getAttribute("href")
            let scrollH = document.querySelector(href).offsetTop
            let menuH = document.getElementById('#primary-menu').offsetHeight
            let scrollTop = scrollH - menuH

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1000);
        }
    }

    // fixing the menu to the top edge
    function fixedMenu() {

        let topScroll = $(document).scrollTop();
        let windowH = window.innerHeight;
        let navH = $('nav').height();
        let resH = windowH - navH;

        if (topScroll > resH && $(window).width() >= 768) {
            $('nav').addClass('fixed-menu');
        } else {
            $('nav').removeClass('fixed-menu');
        }
    }


    fixedMenu();

    $(window).scroll(function () {
        fixedMenu();
    });

    $(window).resize(function () {
        fixedMenu();
    });

    // script to mobile menu
    $('.nav-btn').click(function () {
        $('nav').toggleClass('show-menu')
    });

    $('.block-content').hover(function () {
        $(this).find('.gray-icon').css('display', 'none');
        $(this).find('.green-icon').css('display', 'block');
    }, function () {
        $(this).find('.green-icon').css('display', 'none');
        $(this).find('.gray-icon').css('display', 'block');
    });


    $('#email').focus(function () {
        $(this).next("label").addClass('active_label');
    })
        .blur(function () {
            if (!$(this).val()) {
                $(this).next("label").removeClass('active_label');
            }
        });

    $('.open-popap').click(function ($event) {
        var attribute = $event.target.getAttribute('data-number');
        if (attribute == 1) {
            $('.popap-img').css('display', 'block');
            $('.active-img-1').removeClass('block');
            $('.active-img-2').addClass('block');
        }

        if (attribute == 2) {
            $('.popap-img').css('display', 'block');
            $('.active-img-2').removeClass('block');
            $('.active-img-1').addClass('block');
        }
    });
    $('.close-button').click(function () {
        $('.popap-img').css('display', 'none');
    })
});

document.onreadystatechange = function() {
    var preload = document.getElementsByClassName('preloader')[0];
    if(document.readyState === 'complete') {
        console.log(document.readyState)
        preload.className += ' fade';
            preload.style.display = 'none';
            console.log('Done')
    }
    
}



window.addEventListener('load', function () {
    try {
        var expandImg = document.getElementById("expandedImg");
        var imgs = document.querySelectorAll('.item-img');
        expandImg.src = imgs[0].src;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('click', function ($event) {
                expandImg.src = imgs[$event.target.getAttribute('data-img') - 1].src;
            });
        }
    
    }
    catch {

    }
});

window.addEventListener('scroll', function () {
    progressBar();
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

function progressBar() {
    var docHeight = document.body.scrollHeight - window.innerHeight;
    var topScroll = document.documentElement.scrollTop

    var procent = ((topScroll / docHeight) * 100).toFixed(2) + '%';
    document.querySelector('.progress-bar').style.width = procent;
}

//parallax

$('.parallax-block').parallax({ imageSrc: './images/hero-area2-min.png' });


//Lazy load

let inAdvance = 0
lazyImages = [...document.querySelectorAll('.lazy')]

function lazyLoad() {

    lazyImages.forEach(image => {

        if (image.y < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.getAttribute('data-src')
        }
    })
}

lazyLoad()

document.addEventListener('scroll', lazyLoad)
document.addEventListener('resize', lazyLoad)
