let d = "M99.328125,264.230469 L104.273438,264.230469 L104.273438,264.59375 C103.882811,264.601563 103.593751,264.636718 103.40625,264.699219 C103.046873,264.800782 102.867188,264.999999 102.867188,265.296875 C102.867188,265.406251 102.886719,265.517578 102.925781,265.630859 C102.964844,265.744141 103.035156,265.914061 103.136719,266.140625 L105.878906,272.222656 L108.082031,266.09375 C108.105469,266.03125 108.142578,265.890626 108.193359,265.671875 C108.244141,265.453124 108.269531,265.304688 108.269531,265.226562 C108.269531,265.023436 108.199219,264.875 108.058594,264.78125 C107.917968,264.6875 107.738282,264.632813 107.519531,264.617188 L107.15625,264.59375 L107.15625,264.230469 L110.378906,264.230469 L110.378906,264.59375 C110.058592,264.632813 109.81836,264.742187 109.658203,264.921875 C109.498046,265.101563 109.359376,265.351561 109.242188,265.671875 L105.550781,275.445312 C104.910153,277.132821 104.296878,278.355465 103.710938,279.113281 C103.124997,279.871098 102.382817,280.25 101.484375,280.25 C101.046873,280.25 100.636721,280.140626 100.253906,279.921875 C99.8710918,279.703124 99.6796875,279.355471 99.6796875,278.878906 C99.6796875,278.566405 99.7949207,278.310548 100.025391,278.111328 C100.255861,277.912108 100.546873,277.8125 100.898438,277.8125 C101.101564,277.8125 101.404295,277.886718 101.806641,278.035156 C102.208986,278.183594 102.496093,278.257812 102.667969,278.257812 C103.105471,278.257812 103.566404,277.750005 104.050781,276.734375 C104.535159,275.718745 104.777344,275.039064 104.777344,274.695312 C104.777344,274.625 104.765625,274.539063 104.742188,274.4375 C104.71875,274.335937 104.691406,274.246094 104.660156,274.167969 L100.910156,266.058594 C100.64453,265.480466 100.41211,265.09961 100.212891,264.916016 C100.013671,264.732421 99.718752,264.613282 99.328125,264.558594 L99.328125,264.230469 Z";
let a = 0;
let stepLength = 4;
let noiseMax = 30;
let start = 0;
let steps = [];
let stepsBackUp = [];
let points = 20;
let skip = 1;
let size = 0.8;
let mouseR = 10;
let offsets = [];
let canvasWH = 80;
let figureWH = 0.8;


var s = (sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(canvasWH, canvasWH);
        if (noiseMax == undefined) noiseMax = canvasWH * figureWH * 0.2;
        if (stepLength == undefined) stepLength = noiseMax / 6;
        if (mouseR == undefined) mouseR = noiseMax / 2;
        sketch.background("#151c22");
        sketch.smooth();
        sketch.noFill();
        sketch.ellipseMode(sketch.CENTER);
        steps = getAllSteps(d, stepLength, canvasWH, figureWH);
        // console.log(steps);
        sketch.strokeWeight(0.2);
    };
    sketch.draw = () => {
        points = steps.length;
        // ellipse(mouseX, mouseY, mouseR, mouseR);

        noiseMax = sketch.sin(sketch.frameCount / 100) * 5;
        start += skip;
        start = start % steps.length;
        // console.log(start);
        // console.log(points);
        let x = steps[start].x;
        let y = steps[start].y;
        let vertexes = [];
        a += 0.01;
        sketch.background("#151c2204");
        sketch.stroke(255);
        for (let ind = start; ind < start + points; ind++) {
            // get noise offset 
            let i = ind % steps.length;

            let xOff = sketch.map(sketch.cos(a + i), -1, 1, 0, noiseMax);
            let yOff = sketch.map(sketch.sin(a + i), -1, 1, 0, noiseMax);

            let n = sketch.map(sketch.noise(xOff, yOff), 0, 1, -noiseMax, noiseMax);

            x = steps[i].x + xOff + n;
            y = steps[i].y + yOff + n;

            // get offset caused by mouse position

            offsets[i] = getOffset({
                x: sketch.mouseX,
                y: sketch.mouseY
            }, {
                x: x,
                y: y
            }, mouseR);

            x += offsets[i].x;
            y += offsets[i].y;

            // sketch.point(steps[i].x, steps[i].y);
            vertexes.push({
                x: x,
                y: y
            });
        }
        sketch.beginShape();
        for (let index = 0; index < vertexes.length; index++) {
            const e = vertexes[index];
            sketch.curveVertex(e.x, e.y);
            // sketch.point(e.x,e.y);
        }
        sketch.endShape();
        d = vertexes;
    }
}

var myp5 = new p5(s, 'logoCanvas');

function getAllSteps(p, stepLength, scale = 1, fill = 1) {
    p = getNormalizedVertexes(p, scale, fill);
    let x = p[0][0];
    let y = p[0][1];
    let r = [];
    for (let index = 0; index < p.length; index++) {
        const target = p[index];
        let d = myp5.dist(x, y, target[0], target[1]);
        let steps = d / stepLength;
        let xIncre = (target[0] - x) / steps;
        let yIncre = (target[1] - y) / steps;
        for (let s = 0; s < steps; s++) {
            x = x + xIncre;
            y = y + yIncre;
            r.push({
                x: x,
                y: y
            });
        }
        r.push({
            x: target[0],
            y: target[1]
        })
    }
    return r;

}

function getNormalizedVertexes(p, scale = 1, fill = 1) {
    let d = p.split(" ");
    let xMin = getTarget(d, 0)[0];
    let xMax = xMin;
    let yMin = getTarget(d, 0)[1];
    let yMax = yMin;
    let r = [];
    d.forEach((val, ind) => {
        if (["M", "L", "C", "Z"].includes(val[0])) {
            let t = getTarget(d, ind);
            xMax = t[0] > xMax ? t[0] : xMax;
            xMin = t[0] < xMin ? t[0] : xMin;
            yMax = t[1] > yMax ? t[1] : yMax;
            yMin = t[1] < yMin ? t[1] : yMin;
            r.push(t);
        }
    });
    let xS = xMax - xMin;
    let yS = xS > yMax - yMin ? xS : yMax - yMin
    let diff = xS - yS;
    let longSide = xS > yS ? xS : yS;
    r.forEach((val, ind) => {
        r[ind][0] = (val[0] - xMin) / longSide;
        r[ind][1] = (val[1] - yMin) / longSide;
        if (diff < 0) {
            r[ind][0] -= (diff / 2)/longSide;
        } else if (diff > 0) {
            r[ind][1] += (diff / 2)/longSide;
        }
    });
    if (scale == 1 && fill == 1) {
        return r
    }
    r.forEach((val, ind) => {
        let offset = scale * (1 -fill)/2;
        r[ind][0] = val[0] * scale * fill + offset;
        r[ind][1] = val[1] * scale * fill + offset;
    })
    console.log(r[0][0]);
    // console.log(`min: ${min}, max: ${max}`);
    return r;
}

function getTarget(d, i) {
    let t;
    let cmd = d[i][0];
    switch (cmd) {
        case "L":
        case "M":
            t = d[i].split(",");
            t[0] = parseFloat(t[0].replace(cmd, ''));
            t[1] = parseFloat(t[1]);
            return t;
            break;
        case "C":
            t = d[i + 2].split(",");
            t[0] = parseFloat(t[0]);
            t[1] = parseFloat(t[1]);
            return t;
            break;
        case "Z":
            t = d[0].split(",");
            t[0] = parseFloat(t[0].replace(t[0][0], ''));
            t[1] = parseFloat(t[1]);
            return t;
            break;
        default:
            t = d[i].split(",");
            return t;
            break;
    }
}

function getOffset(mouseLoc, pointLoc, mouseR) {
    let pointOffset = {};
    let d = myp5.dist(mouseLoc.x, mouseLoc.y, pointLoc.x, pointLoc.y);
    let reciprocal = mouseR / d;
    reciprocal = reciprocal > 1 ? 1 : reciprocal;
    let p = Math.pow(reciprocal, 2);
    let x = (mouseLoc.x - pointLoc.x) * p;
    let y = (mouseLoc.y - pointLoc.y) * p;
    pointOffset = {
        x: x,
        y: y
    };
    return pointOffset
}