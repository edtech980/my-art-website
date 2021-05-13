$(function () {

    //configuration
    var width = 240;
    var animation_speed = 3000;
    var pause = 3000;
    var current_slide = 1;

    //cache DOM
    var slider = $("#slider");
    var slide_container = slider.find(".slides");
    var slides = slide_container.find(".slide");

    var interval;

    function start_slider() {
        interval = setInterval(function () {
            slide_container.animate({ "margin-left": "-=" + width }, animation_speed, function () {
                current_slide++;
                if (current_slide === slides.length) {
                    current_slide = 1;
                    slide_container.css("margin-left", 0);
                }
            });
        }, pause)
    }

    function stop_slider() {
        clearInterval(interval);
    }

    slider.on("mouseenter", stop_slider).on("mouseleave", start_slider);
});