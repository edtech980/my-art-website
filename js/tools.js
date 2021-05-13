var win_w = window.innerWidth
var win_width = parseInt(win_w)



var pencil = $(".pencil")

if (win_width < 654) {
    pencil.css({
        "padding-bottom": "150px"
    })
};






$(window).resize(function () {
    var win_w = window.innerWidth
    var win_width = parseInt(win_w)

    if (win_width < 654) {
        pencil.css({
            "padding-bottom": "50px"
        })
    };

});


