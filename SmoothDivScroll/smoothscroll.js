$(document).ready(function() {
    table = $('#tablescroll table');
    tablewrapper = $("#tablescroll");
    tablewrapper.wrap("<div id='wraptablescroll'></div>");
    tablewrapper.after("<div id='scrollleft'><img src='left-chevron.svg' alt='left'></div><div id='scrollright'><img src='right-chevron.svg' alt='right'></div>");
    tablewrapper.css({ 'position': 'relative', 'overflow': 'auto' });
    $('#wraptablescroll').css('position', 'relative');
    leftsmooth = $("#wraptablescroll #scrollleft");
    rightsmooth = $("#wraptablescroll #scrollright");
    tim = 0;
    scrollwidth = 0;
    leftsmooth.hide();
    rightsmooth.hide();
    tablewrapper.mouseenter(function() {
        scrollwidth = this.scrollWidth - $(this).width();
        if ($(this).scrollLeft() != 0) {
            leftsmooth.show();
            leftsmooth.clearQueue();
            leftsmooth.stop(true);
            leftsmooth.animate({ "opacity": "0.2" }, 200);
        } else {
            leftsmooth.hide();
        }

        if (scrollwidth != $(this).scrollLeft()) {
            rightsmooth.show();
            rightsmooth.clearQueue();
            rightsmooth.stop(true);
            rightsmooth.animate({ "opacity": "0.2" }, 200);
        } else {
            rightsmooth.hide();
        }
    });
    tablewrapper.mouseleave(function() {
        rightsmooth.clearQueue();
        rightsmooth.stop(true);
        leftsmooth.clearQueue();
        leftsmooth.stop(true);
        leftsmooth.animate({ "opacity": "0" }, 200);
        rightsmooth.animate({ "opacity": "0" }, 200);
    });
    tablewrapper.scroll(function() {
        scrollwidth = this.scrollWidth - $(this).width();
        if ($(this).scrollLeft() == 0) {
            leftsmooth.clearQueue();
            leftsmooth.stop(true);
            leftsmooth.hide().animate({ "opacity": "0", "display": "none" }, 200);
        } else {
            leftsmooth.show();
        }
        if (scrollwidth == $(this).scrollLeft()) {
            rightsmooth.clearQueue();
            rightsmooth.stop(true);
            rightsmooth.hide().animate({ "opacity": "0", "display": "none" }, 200);
        } else {
            rightsmooth.show();
        }

    });
    leftsmooth.mouseenter(function(event) {
        if (tablewrapper.scrollLeft() != 0) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0.5' }, 200);
            tim = scrollwidth * 2 - (scrollwidth * 2 - tablewrapper.scrollLeft() * 2);
            tablewrapper.animate({ scrollLeft: 0 }, tim, 'linear');
        } else {
            $(this).hide();
        }

    });
    leftsmooth.mouseleave(function(event) {
        if (tablewrapper.scrollLeft() != 0) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0' }, 200);
            tablewrapper.clearQueue();
            tablewrapper.stop(true);
        }
    });
    rightsmooth.mouseenter(function(event) {
        scrollwidth = tablewrapper[0].scrollWidth - tablewrapper.width();
        if (scrollwidth != tablewrapper.scrollLeft()) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0.5' }, 200);
            tim = scrollwidth * 2 - tablewrapper.scrollLeft() * 2;
            tablewrapper.animate({ scrollLeft: scrollwidth }, tim, 'linear');
        } else {
            $(this).hide();
        }
    });
    rightsmooth.mouseleave(function(event) {
        scrollwidth = tablewrapper[0].scrollWidth - tablewrapper.width();
        if (scrollwidth != tablewrapper.scrollLeft()) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0' }, 200);
            tablewrapper.clearQueue();
            tablewrapper.stop(true);
        }
    });

});