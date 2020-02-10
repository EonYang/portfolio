

let pts = [];
let movingFast = false;
let speedThreshold = 5;
let mouseLastPos;
let speed;
let canvas
let frameByMilli = 0;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    // smooth();
    mouseLastPos = createVector(mouseX, mouseY);
    canvas.parent("mySketchCanvas");
    stroke(color(255, 255, 255, 100));
}

function draw() {
    console.log(pts.length);
    // console.log(millis()/1000);
    // console.log(frameCount);
    frameByMilli = floor(millis()/16);
    clear();
    speed = constrain(dist(mouseX, mouseY, mouseLastPos.x, mouseLastPos.y), 0, 90);
    if (speed >= speedThreshold) {
        movingFast = true;
    } else movingFast = false;
    mouseLastPos = createVector(mouseX, mouseY);

    if (movingFast) {
        for (let i = 0; i < 1 + speed / 10; i++) {
            let newP = new Particle(mouseX, mouseY, i + pts.length, i + pts.length, speed, speed / 2 + 35);
            pts.push(newP);
        }
    }

    if (mouseIsPressed & frameCount % 2 ===0) {
        
        for (let i = 0; i < 10; i++) {
            let newP = new Particle(mouseX, mouseY, i + pts.length, i + pts.length);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {

    constructor(x, y, xOffset, yOffset, dia = 40, lifespan = 90) {
        this.loc = createVector(x, y);
        let randDegrees = random(360);
        this.vel = createVector(cos(radians(randDegrees)), sin(radians(randDegrees)));
        this.vel.mult(random(5));

        this.acc = createVector(0, 0);
        this.lifeSpan = int(random(30, lifespan));
        this.decay = random(0.75, 0.9);
        this.weightRange = random(3, dia);

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

        this.weight = float(this.lifeSpan - this.passedLife) / this.lifeSpan * this.weightRange;

        this.acc.set(0, 0);

        let rn = (noise((this.loc.x + frameByMilli + this.xOffset) * 0.01, (this.loc.y + frameByMilli + this.yOffset) * 0.01) - 0.5) * 4 * PI;
        let mag = noise((this.loc.y + frameByMilli) * 0.01, (this.loc.x + frameByMilli) * 0.01);
        let dir = createVector(cos(rn), sin(rn));
        this.acc.add(dir);
        this.acc.mult(mag);

        let randDegrees = random(360);
        let randV = createVector(cos(radians(randDegrees)), sin(radians(randDegrees)));
        randV.mult(0.5);
        this.acc.add(randV);

        this.vel.add(this.acc);
        this.vel.mult(this.decay);
        this.vel.limit(3);
        this.loc.add(this.vel);
    }

    display() {
        strokeWeight(this.weight);
        // stroke(this.c);
        point(this.loc.x, this.loc.y);
    }
}