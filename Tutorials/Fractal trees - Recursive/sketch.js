var PI = 22 / 7
var angle = PI


function setup() {
    createCanvas(800, 800)
    slider = createSlider(0, TWO_PI, PI / 4, 0.01)
} 

function draw() {
    background(51)
    angle = slider.value()
    stroke(255)
    translate(400, height)
    branch(200, getRandomHEX())
}

function branch(len, color){
    stroke(color)
    line(0,0,0, -len)
    translate(0, -len)

    if( len > 4) {
        push()
        rotate(angle)
        branch(len*0.67, getRandomHEX())
        pop()
        push()
        rotate(-angle)
        branch(len*0.67, getRandomHEX())
        pop()
    }

}

function getRandomHEX(){
    var hex = "#"
    var alphabet = "0123456789ABCDEF".split('')
    for(var i = 0; i < 6; i++){
        hex += alphabet[Math.round(Math.random()*15)]
    }
    return hex
}

