function slidetoggle() {
    var slider = document.getElementById("header-hidde");
    slider.style.height = window.innerHeight - 60 + "px";

    if(slider.style.left == "0px") {
        slider.style.left = "-400px";
    }
    else {
        slider.style.left = "0px";
    }
}