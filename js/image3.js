
var win_w = window.innerWidth
var win_width = parseInt(win_w)

image_width = win_width / 1366

var image1_width = 360 * image_width 
var image2_width = 544 * image_width * 1.5
var image3_width = 336 * image_width

var image1_height = 480 * image_width
var image2_height = 430 * image_width * 1.5
var image3_height = 497 * image_width

var image1 = $("img")
var fig = $("figure")
var div = $("h2")
var image = $("#image")
var div2 = $("#h2")
var div3 = $("#grid")
var icon = $(".icon")

image1.first().css({
    "width": image2_width,
    "height": image2_height,
});

fig.first().css({
    "padding-bottom": "50px"
})

fig.first().css({
   "padding-top": "50px"
})

div.first().css({
    "padding-top": "50px"
})

div.css({
    "line-height": "50px",
    "opacity": "0.6"
})

if (win_width > 1024) {
    div3.addClass("grid-container")
    image.addClass("grid-30")
    image.addClass("suffix-20")

}

if (win_width < 1025) {

    image.removeClass("grid-30")
    image.removeClass("suffix-20")
    div2.removeClass("grid-40")

    fig.first().css({
        "padding-left": "30px",
        "float": "left",
    })

    div2.css({
        "float": "left",
        "padding-left": "20px",
    })


};

$(window).resize(function () {
    var win_w = window.innerWidth
    var win_width = parseInt(win_w)

    image_width = win_width / 1366

    var image1_width = 360 * image_width 
    var image2_width = 544 * image_width * 1.5
    var image3_width = 336 * image_width

    var image1_height = 480 * image_width 
    var image2_height = 430 * image_width * 1.5
    var image3_height = 497 * image_width

    image1.first().css({
        "width": image2_width,
        "height": image2_height,
    });

    if (win_width > 1024) {
        div3.addClass("grid-container")
        image.addClass("grid-30")
        image.addClass("suffix-20")
    }

    if (win_width < 1025) {
       
        image.removeClass("grid-30")
        image.removeClass("suffix-20")
        div2.removeClass("grid-40")
       

        fig.first().css({
            "padding-left": "30px",
            "float": "left",
        })

        div2.css({
            "float": "left",
            "padding-left": "20px",
        })


    };
  
});
