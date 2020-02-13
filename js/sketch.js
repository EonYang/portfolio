let pts = [];
let movingFast = false;
let speedThreshold = 5;
let mouseLastPos;
let speed;
let canvas
let frameByMilli = 0;


var s2 = (sketch) => {
    sketch.setup = () => {
        sketch.frameRate(60);
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        // smooth();
        mouseLastPos = sketch.createVector(sketch.mouseX, sketch.mouseY);
        // canvas.parent("");
        sketch.stroke(sketch.color(255, 255, 255, 100));
    }

    sketch.draw = () => {
        // console.log(pts.length);
        // console.log(millis()/1000);
        // console.log(frameCount);
        frameByMilli = Math.floor(sketch.millis() / 16);
        sketch.clear();
        speed = sketch.constrain(sketch.dist(sketch.mouseX, sketch.mouseY, mouseLastPos.x, mouseLastPos.y), 0, 90);
        if (speed >= speedThreshold) {
            movingFast = true;
        } else movingFast = false;
        mouseLastPos = sketch.createVector(sketch.mouseX, sketch.mouseY);

        if (movingFast) {
            for (let i = 0; i < 1 + speed / 10; i++) {
                let newP = new Particle(sketch.mouseX, sketch.mouseY, i + pts.length, i + pts.length, speed, speed / 2 + 35);
                pts.push(newP);
            }
        }

        if (sketch.mouseIsPressed & sketch.frameCount % 2 === 0) {
            for (let i = 0; i < 10; i++) {
                let newP = new Particle(sketch.mouseX, sketch.mouseY, i + pts.length, i + pts.length);
                pts.push(newP);
            }
        }

        for (let i = pts.length - 1; i > -1; i--) {
            let p = pts[i];
            p.update();
            p.display();
            if (p.dead) {
                pts.splice(i, 1);
            }
        }
    }
    
    sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    }
}

var myp52 = new p5(s2, 'mySketchCanvas');


class Particle {

    constructor(x, y, xOffset, yOffset, dia = 40, lifespan = 90) {
        this.loc = myp52.createVector(x, y);
        let randDegrees = myp52.random(360);
        this.vel = myp52.createVector(myp52.cos(myp52.radians(randDegrees)), myp52.sin(myp52.radians(randDegrees)));
        this.vel.mult(myp52.random(5));

        this.acc = myp52.createVector(0, 0);
        this.lifeSpan = parseInt(myp52.random(30, lifespan));
        this.decay = myp52.random(0.75, 0.9);
        this.weightRange = myp52.random(3, dia);

        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.dead;
        this.passedLife = 0;
        this.bornFrame = frameByMilli;
    }

    update() {
        if (this.passedLife >= this.lifeSpan) {
            this.dead = true;
        } else {
            this.passedLife = frameByMilli - this.bornFrame;
        }

        this.weight = myp52.float(this.lifeSpan - this.passedLife) / this.lifeSpan * this.weightRange;

        this.acc.set(0, 0);

        let rn = (myp52.noise((this.loc.x + frameByMilli + this.xOffset) * 0.01, (this.loc.y + frameByMilli + this.yOffset) * 0.01) - 0.5) * 4 * myp52.PI;
        let mag = myp52.noise((this.loc.y + frameByMilli) * 0.01, (this.loc.x + frameByMilli) * 0.01);
        let dir = myp52.createVector(myp52.cos(rn), myp52.sin(rn));
        this.acc.add(dir);
        this.acc.mult(mag);

        let randDegrees = myp52.random(360);
        let randV = myp52.createVector(myp52.cos(myp52.radians(randDegrees)), myp52.sin(myp52.radians(randDegrees)));
        randV.mult(0.5);
        this.acc.add(randV);

        this.vel.add(this.acc);
        this.vel.mult(this.decay);
        this.vel.limit(3);
        this.loc.add(this.vel);
    }

    display() {
        myp52.strokeWeight(this.weight);
        // stroke(this.c);
        myp52.point(this.loc.x, this.loc.y);
    }
}