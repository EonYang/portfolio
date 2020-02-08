let pts = [];
let movingFast = false;
let speedThreshold = 1;
let mouseLastPos;
let speed;
let canvas

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    mouseLastPos = createVector(mouseX, mouseY);
    canvas.parent("mySketchCanvas");
    stroke(color(255, 255, 255, 100));
}

function draw() {
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
    }

    update() {
        if (this.passedLife >= this.lifeSpan) {
            this.dead = true;
        } else {
            this.passedLife++;
        }

        // this.alpha = float(this.lifeSpan - this.passedLife) / this.lifeSpan * 70 + 50;
        this.weight = float(this.lifeSpan - this.passedLife) / this.lifeSpan * this.weightRange;

        this.acc.set(0, 0);

        let rn = (noise((this.loc.x + frameCount + this.xOffset) * 0.01, (this.loc.y + frameCount + this.yOffset) * 0.01) - 0.5) * 4 * PI;
        let mag = noise((this.loc.y + frameCount) * 0.01, (this.loc.x + frameCount) * 0.01);
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