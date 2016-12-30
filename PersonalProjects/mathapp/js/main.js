
// CENTER VERTICALLY AN OBJECT
jQuery.fn.center = function () {
    this.css("position","absolute")
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 3) + $(window).scrollTop()) + "px")
    console.log(this)
    return this
}

$(".center").center()