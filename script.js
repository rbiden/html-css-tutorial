$(window).scroll(function() {
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();
    var scrollPercent = (scroll / (docHeight - windowHeight)) * 100;

    $('.nav-link').removeClass('active');

    if (scrollPercent >= 99) {
        $("#nav-about").addClass('active');
    } else if (scrollPercent < 99 && scrollPercent > 66) {
        $("#nav-demo").addClass('active');
    } else if (scrollPercent < 66 && scrollPercent > 32) {
        $("#nav-categories").addClass('active');
    } else if (scrollPercent < 35.8) {
        $("#nav-home").addClass('active');
    }
});