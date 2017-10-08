$(document).ready(function() {
    scrollelement = $('#elementscroll *');
    scrollelementwrapper = $("#elementscroll");
    scrollelementwrapper.wrap("<div id='wrapelementscroll'></div>");
    scrollelementwrapper.after("<div id='scrollleft'><img src='left-chevron.svg' alt='left'></div><div id='scrollright'><img src='right-chevron.svg' alt='right'></div>");
    scrollelementwrapper.css({ 'position': 'relative', 'overflow': 'auto' });
    $('#wrapelementscroll').css('position', 'relative');
    leftsmooth = $("#wrapelementscroll #scrollleft");
    rightsmooth = $("#wrapelementscroll #scrollright");
    tim = 0;
    scrollwidth = 0;
    leftsmooth.hide();
    rightsmooth.hide();
    scrollelementwrapper.mouseenter(function() {
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
    scrollelementwrapper.mouseleave(function() {
        rightsmooth.clearQueue();
        rightsmooth.stop(true);
        leftsmooth.clearQueue();
        leftsmooth.stop(true);
        leftsmooth.animate({ "opacity": "0" }, 200);
        rightsmooth.animate({ "opacity": "0" }, 200);
    });
    scrollelementwrapper.scroll(function() {
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
        if (scrollelementwrapper.scrollLeft() != 0) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0.5' }, 200);
            tim = scrollwidth * 2 - (scrollwidth * 2 - scrollelementwrapper.scrollLeft() * 2);
            scrollelementwrapper.animate({ scrollLeft: 0 }, tim, 'linear');
        } else {
            $(this).hide();
        }

    });
    leftsmooth.mouseleave(function(event) {
        if (scrollelementwrapper.scrollLeft() != 0) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0' }, 200);
            scrollelementwrapper.clearQueue();
            scrollelementwrapper.stop(true);
        }
    });
    rightsmooth.mouseenter(function(event) {
        scrollwidth = scrollelementwrapper[0].scrollWidth - scrollelementwrapper.width();
        if (scrollwidth != scrollelementwrapper.scrollLeft()) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0.5' }, 200);
            tim = scrollwidth * 2 - scrollelementwrapper.scrollLeft() * 2;
            scrollelementwrapper.animate({ scrollLeft: scrollwidth }, tim, 'linear');
        } else {
            $(this).hide();
        }
    });
    rightsmooth.mouseleave(function(event) {
        scrollwidth = scrollelementwrapper[0].scrollWidth - scrollelementwrapper.width();
        if (scrollwidth != scrollelementwrapper.scrollLeft()) {
            $(this).clearQueue();
            $(this).stop(true);
            $(this).animate({ 'opacity': '0' }, 200);
            scrollelementwrapper.clearQueue();
            scrollelementwrapper.stop(true);
        }
    });

});