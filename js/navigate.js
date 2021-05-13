
$("html").toggleClass("show")
var nav_bar = $(".nav")
var nav_bar_men = $(".side-bar-nav")
var header = $("h1")

$("#btn").click(function () {  
    $(".sidebar").toggleClass("show")   
})

$("div").not(".side-bar-nav").click(function () {
    $(".sidebar").removeClass("show")    
})

var win_w = window.innerWidth
var win_width = parseInt(win_w)

if (win_width < 809) {
    nav_bar_men.removeClass("show")
    nav_bar.removeClass("navigation")
    nav_bar.addClass("sidebar")
    header.removeClass("nav")

};

if (win_width > 809) {
    nav_bar.removeClass("sidebar")
    nav_bar_men.addClass("show")
    nav_bar.addClass("navigation")
    header.addClass("nav")

}


$(window).resize(function () {
    var win_w = window.innerWidth
    var win_width = parseInt(win_w)

    if (win_width < 809) {
        nav_bar_men.removeClass("show")
        nav_bar.removeClass("navigation")
        nav_bar.addClass("sidebar")
        header.removeClass("nav")
        
    };

    if (win_width > 809) {
        nav_bar.removeClass("sidebar")
        nav_bar_men.addClass("show")
        nav_bar.addClass("navigation")
        header.addClass("nav")
              
    }

    $(".im").html(win_width)

})









