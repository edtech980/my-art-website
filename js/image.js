var win_w = window.innerWidth
var win_width = parseInt(win_w)

image_width = win_width / 1366

var image1_width = 360 * image_width
var image2_width = 544 * image_width
var image3_width = 336 * image_width

var image1_height = 480 * image_width
var image2_height = 430 * image_width
var image3_height = 497 * image_width

var image1 = $(".image1")
var image2 = $(".image2")
var image3 = $(".natalie")

var figure = $("figure")
var icon = $(".icon")

image1.each(function () {
    $(this).css({
        "width": image1_width,
        "height": image1_height,
    });
});

image2.each(function () {
    $(this).css({
        "width": image2_width,
        "height": image2_height,
    });
});

image3.each(function () {
    $(this).css({
        "width": image3_width,
        "height": image3_height,
    });
});




if (win_width > 1025) {

    figure.each(function () {
        $(this).addClass("grid-30")
    })

    icon.each(function () {
        $(this).removeClass("grid-30")
        $(this).removeClass("medium")
        $(this).removeClass("small")
    })
};

if (win_width < 1025) {

    figure.each(function () {
        $(this).addClass("medium")
        $(this).removeClass("grid-30")
        $(this).removeClass("grid-50")
    });

    icon.each(function () {
        $(this).removeClass("grid-30")
        $(this).removeClass("medium")
        $(this).removeClass("small")
    })

};


    if (win_width < 607) {

        figure.each(function () {
            $(this).toggleClass("small")
            $(this).removeClass("grid-30")
            $(this).addClass("grid-50")
        });

        icon.each(function () {
            $(this).removeClass("grid-30")
            $(this).removeClass("medium")
            $(this).removeClass("small")
            $(this).removeClass("grid-50")
        })
    }




    $(window).resize(function () {
        var win_w = window.innerWidth
        var win_width = parseInt(win_w)

        image_width = win_width / 1366

        var image1_width = 360 * image_width
        var image2_width = 544 * image_width
        var image3_width = 336 * image_width

        var image1_height = 480 * image_width
        var image2_height = 430 * image_width
        var image3_height = 497 * image_width

        var image1 = $(".image1")
        var image2 = $(".image2")
        var image3 = $(".natalie")

        image1.each(function () {
            $(this).css({
                "width": image1_width,
                "height": image1_height,
            });
        });

        image2.each(function () {
            $(this).css({
                "width": image2_width,
                "height": image2_height,
            });
        });

        image3.each(function () {
            $(this).css({
                "width": image3_width,
                "height": image3_height,
            });
        });

        if (win_width > 1024) {

            figure.each(function () {
                $(this).removeClass("medium")
                $(this).removeClass("small")
                $(this).addClass("grid-30")
                $(this).removeClass("grid-50")
            });

            icon.each(function () {
                $(this).removeClass("grid-30")
                $(this).removeClass("medium")
                $(this).removeClass("small")
            })

        }

        if (win_width < 1025) {

            figure.each(function () {
                $(this).addClass("medium")
                $(this).removeClass("small")
                $(this).removeClass("grid-30")
                $(this).removeClass("grid-50")
            });

            icon.each(function () {
                $(this).removeClass("grid-30")
                $(this).removeClass("medium")
                $(this).removeClass("small")
            })

        };

        if (win_width < 607) {

            figure.each(function () {
                $(this).addClass("small")
                $(this).removeClass("grid-30")
                $(this).addClass("grid-50")
            });

            icon.each(function () {
                $(this).removeClass("grid-30")
                $(this).removeClass("medium")
                $(this).removeClass("small")
                $(this).removeClass("grid-50")
            })
        }

    });


