$(window).scroll(function() {
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    var scrollPercent = (scroll / (docHeight - windowHeight)) * 100;

    $('.nav-link').removeClass('active');

    if (scrollPercent >= 99) {
        $("#nav-about").addClass('active');
    } else if (scrollPercent < 99 && scrollPercent > 70) {
        $("#nav-demo").addClass('active');
    } else if (scrollPercent < 70 && scrollPercent > 28) {
        $("#nav-categories").addClass('active');
    } else if (scrollPercent < 28) {
        $("#nav-home").addClass('active');
    }

    //console.log(scrollPercent);
});

$(document).ready(function() {
    var currentIndex = 0;
    var items = $("#slideshow img");
    items.hide();
    $('.show-first').show();
    
    setInterval(function() {
        currentIndex ++;
        if (currentIndex > (items.length - 1)) {
            currentIndex = 0;
        }
        var item = $("#slideshow img").eq(currentIndex);
        items.hide();
        item.css("display","block");
    }, 2000);
});
  