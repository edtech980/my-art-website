var i = 0;
var images = [];
var time = 3000;

//image list

images[0] = "../images/model.jpg";
images[1] = "../images/model.jpg";
images[2] = "../images/artist.jpg";
images[3] = "../images/cat.jpg";

//Changes Image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;