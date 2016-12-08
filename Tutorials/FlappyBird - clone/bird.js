function Bird(){
    this.y = width/2
    this.x = 64

    this.gravity = 0.6
    this.lift = -14
    this.velocity = 0

    this.show = function() {
        fill(0,170,0)
        ellipse(this.x, this.y, 32, 32)
    }

    this.up = function() {
        this.velocity += this.lift
        console.log(this.velocity)
    }

    this.update = function(){
        this.velocity += this.gravity
        this.velocity *= 0.9
        this.y += this.velocity

        if (this.y > height) {
            this.y = height
            this.veloctity = 0
        }

        if (this.y < 0) {
            this.y = 0
            this.veloctity = 0
        }
    }
}