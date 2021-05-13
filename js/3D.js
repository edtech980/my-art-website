var win_w = window.innerWidth
var win_width = parseInt(win_w)

image_width = win_width / 1366

var image1_width = 180 * image_width

var image1_height = 240 * image_width

var image1 = $(".box")

image1.css({
    "width": image1_width,
    "height": image1_height,
});

$(window).resize(function () {
    var win_w = window.innerWidth
    var win_width = parseInt(win_w)

    image_width = win_width / 1366

    var image1_width = 180 * image_width

    var image1_height = 240 * image_width

    var image1 = $(".box")

    image1.css({
            "width": image1_width,
            "height": image1_height,
    });

});

   


