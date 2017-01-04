// CENTER VERTICALLY AN OBJECT
jQuery.fn.center = function () {
    this.css("margin-top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 3) + $(window).scrollTop()) + "px")
    return this
}



$(".signin").center()