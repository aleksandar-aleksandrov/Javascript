var cells = [];

function setup() {
    createCanvas(400,400)
    cells.push(new Cell())
    cells.push(new Cell())
    cells.push(new Cell())

}


function draw() {
    background(51)
    cells.forEach(function(element){
        element.move()
        element.show()
    })
}

function mousePressed(){
    cells.forEach(function(element, i){
        if(element.clicked(mouseX, mouseY)){
            cells.push(element.mitosis())
            cells.push(element.mitosis())
            cells.splice(i,1)

        }
    })

}
