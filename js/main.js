$(document).ready(function () {
    $(".li-menu1").mouseenter(function () {
        $(".menu").css("background-color", "#F0D9FF");
    });
    $(".li-menu2").mouseenter(function () {
        $(".menu").css("background-color", "#F5E8C7");
    });
    $(".li-menu3").mouseenter(function () {
        $(".menu").css("background-color", "#C0FEFC");
    });
    $(".li-menu4").mouseenter(function () {
        $(".menu").css("background-color", "#FAF1E6");
    });
    $(".li-menu5").mouseenter(function () {
        $(".menu").css("background-color", "#CAF7E3");
    });
    $(".enter").click(function () {
        $(".menu").slideDown();
        $('body').css('overflow', 'hidden');
        $('.cursor').css('border', '1px solid #000000');
    });
    $(".exit").click(function () {
        $(".menu").slideUp();
        $('body').css('overflow', 'auto');
    });
    $(".menu-link").click(function () {
        $(".menu").slideUp();
        $('body').css('overflow', 'auto');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar").css("background-color", "#000000");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
    $(".web-design-link").click(function () {
        $(".web-design").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".web-design").css('display', 'block');
        } else {
            $(".web-design").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".web-design").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".web-dev-link").click(function () {
        $(".web-dev").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".web-dev").css('display', 'block');
        } else {
            $(".web-dev").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".web-dev").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".web-content-link").click(function () {
        $(".web-content").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".web-content").css('display', 'block');
        } else {
            $(".web-content").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".web-content").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".ppc-link").click(function () {
        $(".ppc").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".ppc").css('display', 'block');
        } else {
            $(".ppc").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".ppc").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".s-media-ads-link").click(function () {
        $(".s-media-ads").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".s-media-ads").css('display', 'block');
        } else {
            $(".s-media-ads").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".s-media-ads").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".s-media-management-link").click(function () {
        $(".s-media-management").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".s-media-management").css('display', 'block');
        } else {
            $(".s-media-management").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".s-media-management").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".seo-link").click(function () {
        $(".seo").slideDown(100);
        if (window.matchMedia('(max-width: 425px)').matches) {
            $(".seo").css('display', 'block');
        } else {
            $(".seo").css('display', 'flex');
        }
        $('body').css('overflow', 'hidden');
    });
    $(".services-btn").click(function () {
        $(".seo").slideUp(100);
        $('body').css('overflow', 'auto');
    });
    $(".faq1").click(function () {
        $(".faq1-ansr").slideToggle(500);
    });
    $(".faq2").click(function () {
        $(".faq2-ansr").slideToggle(500);
    });
    $(".faq3").click(function () {
        $(".faq3-ansr").slideToggle(500);
    });
});
