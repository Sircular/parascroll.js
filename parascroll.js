document.addEventListener("DOMContentLoaded", function(){
    var CLASS_NAME = ".parallax-bg";
    var ATTR_NAME = "data-bgurl";
    var SCROLL_SPEED = 0.6;

    var elements = document.querySelectorAll(CLASS_NAME);
    var targets = [];
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var url = elem.getAttribute(ATTR_NAME);
        if (url) {
            elem.style.backgroundImage = "url('"+url+"')";
            elem.style.backgroundAttachment = "fixed";
            elem.style.backgroundSize = "cover";
            targets.push(elem);
        }
    }
    var callback = function() {
        for (var i = 0; i < targets.length; i++) {
            var rekt = targets[i].getBoundingClientRect();
            targets[i].style.backgroundPosition = "50%" +
                rekt.top*SCROLL_SPEED + "px";
        }
    };
    window.onscroll = callback;
    callback();
});
