function Cell(pos, r, c) {

    if(pos) {
        this.pos = pos.copy()
    } else {
        this.pos = createVector(random(width), random(height))
    }

    this.r = r || 60
    this.color = c || color(random(100,250), 0 , random(100,250))

    this.move = function() {
        var velocity = p5.Vector.random2D();

        this.pos.add(velocity);
    }

    this.show = function() {
        noStroke()
        fill(this.color)
        ellipse(this.pos.x, this.pos.y, this.r, this.r)
    }

    this.clicked = function(x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y)

        if(d < this.r) {
            return true;
        }

        return false;
    }

    this.mitosis = function() {
        var cellA = new Cell(this.pos, this.r/2, this.color);
        return cellA;
    }
}