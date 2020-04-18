import p5 from "p5";
let d =
  "M726.675,883 L758.35,940 L695,940 L726.675,883 Z M734.396407,917.761088 C733.809783,917.761088 733.271621,917.788344 732.773928,917.838259 C732.152231,917.90061 731.593682,917.998319 731.082702,918.122424 C730.252942,918.323953 729.548616,918.595087 728.903016,918.897457 C728.327882,919.166824 727.799354,919.460981 727.270266,919.7528 C726.526327,920.163122 725.781829,920.571108 724.971707,920.941985 C724.38806,921.209181 723.770351,921.457116 723.09425,921.672785 C722.478502,921.869202 721.814321,922.038858 721.083329,922.171928 C720.453261,922.286626 719.773557,922.374144 719.032446,922.428192 C718.47367,922.468942 717.879987,922.490665 717.246352,922.490665 C716.460624,922.490665 715.736328,922.457262 715.063848,922.395596 C714.333321,922.328608 713.66394,922.228267 713.043374,922.101165 C712.293188,921.947514 711.61434,921.754754 710.985045,921.534528 C710.318595,921.301299 709.707722,921.037264 709.126554,920.756252 L700.099195,937 L753.250805,937 L744.484,921.225 L744.274694,921.139084 C743.838657,920.953217 743.423548,920.755542 743.02016,920.550991 C742.512059,920.293342 742.022555,920.024784 741.533248,919.755174 C741.055283,919.491813 740.577712,919.226506 740.065994,918.979181 C739.580488,918.744525 739.064245,918.526055 738.487765,918.340792 C737.882144,918.146164 737.210043,917.988184 736.437258,917.886585 C735.825683,917.806181 735.15105,917.761088 734.396407,917.761088 Z M726.675,889.176136 L710.588,918.125 L710.620153,918.140351 C711.028227,918.329497 711.455672,918.507959 711.914009,918.669383 C712.363548,918.827708 712.842805,918.969642 713.362649,919.08919 C713.940463,919.222069 714.568421,919.327291 715.26145,919.396622 C715.869611,919.457463 716.527883,919.490665 717.246352,919.490665 C717.81599,919.490665 718.347786,919.469794 718.84677,919.430824 C719.416583,919.386323 719.943607,919.318221 720.435327,919.230647 C721.258645,919.084016 721.98299,918.882796 722.643506,918.646371 C723.430177,918.364789 724.126308,918.03327 724.79127,917.68456 C725.406685,917.361832 725.995403,917.024379 726.604487,916.698159 C727.236156,916.359843 727.889731,916.033609 728.617707,915.748412 C729.20693,915.517573 729.844896,915.313618 730.559441,915.1519 C731.176823,915.012173 731.851373,914.903977 732.601048,914.837216 C733.15592,914.787802 733.751946,914.761088 734.396407,914.761088 C734.990083,914.761088 735.542739,914.783758 736.060048,914.825959 C736.86383,914.891529 737.582278,915.004252 738.236679,915.152351 C738.99122,915.323113 739.660611,915.540907 740.277481,915.787684 C740.846326,916.015248 741.370509,916.267458 741.875615,916.53016 L726.675,889.176136 Z";
let a = 0;
let stepLength = 2;
let noiseMax = 0;
let start = 0;
let steps = [];
let points = 20;
let skip = 1;
let mouseR = 10;
let offsets = [];
let canvasWH = 80;
let figureWH = 0.8;

export const s = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(canvasWH, canvasWH);
    if (noiseMax === undefined) noiseMax = canvasWH * figureWH * 0.2;
    if (stepLength === undefined) stepLength = noiseMax / 6;
    if (mouseR === undefined) mouseR = noiseMax / 2;
    sketch.background("#fff");
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
    sketch.background("#ffffff04");
    sketch.stroke("#54769688");
    for (let ind = start; ind < start + points; ind++) {
      // get noise offset
      let i = ind % steps.length;

      let xOff = sketch.map(sketch.cos(a + i), -1, 1, 0, noiseMax) / 10;
      let yOff = sketch.map(sketch.sin(a + i), -1, 1, 0, noiseMax) / 10;

      let n = sketch.map(sketch.noise(xOff, yOff), 0, 10, -noiseMax, noiseMax);

      x = steps[i].x + xOff + n;
      y = steps[i].y + yOff + n;

      // get offset caused by mouse position

      offsets[i] = getOffset(
        {
          x: sketch.mouseX,
          y: sketch.mouseY,
        },
        {
          x: x,
          y: y,
        },
        mouseR
      );

      x += offsets[i].x;
      y += offsets[i].y;

      // sketch.point(steps[i].x, steps[i].y);
      vertexes.push({
        x: x,
        y: y,
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
  };

  function getAllSteps(p, stepLength, scale = 1, fill = 1) {
    p = getNormalizedVertexes(p, scale, fill);
    let x = p[0][0];
    let y = p[0][1];
    let r = [];
    for (let index = 0; index < p.length; index++) {
      const target = p[index];
      let d = sketch.dist(x, y, target[0], target[1]);
      let steps = d / stepLength;
      let xIncre = (target[0] - x) / steps;
      let yIncre = (target[1] - y) / steps;
      for (let s = 0; s < steps; s++) {
        x = x + xIncre;
        y = y + yIncre;
        r.push({
          x: x,
          y: y,
        });
      }
      r.push({
        x: target[0],
        y: target[1],
      });
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
    let yS = xS > yMax - yMin ? xS : yMax - yMin;
    let diff = xS - yS;
    let longSide = xS > yS ? xS : yS;
    r.forEach((val, ind) => {
      r[ind][0] = (val[0] - xMin) / longSide;
      r[ind][1] = (val[1] - yMin) / longSide;
      if (diff < 0) {
        r[ind][0] -= diff / 2 / longSide;
      } else if (diff > 0) {
        r[ind][1] += diff / 2 / longSide;
      }
    });
    if (scale === 1 && fill === 1) {
      return r;
    }
    r.forEach((val, ind) => {
      let offset = (scale * (1 - fill)) / 2;
      r[ind][0] = val[0] * scale * fill + offset;
      r[ind][1] = val[1] * scale * fill + offset;
    });
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
        t[0] = parseFloat(t[0].replace(cmd, ""));
        t[1] = parseFloat(t[1]);
        return t;
      case "C":
        t = d[i + 2].split(",");
        t[0] = parseFloat(t[0]);
        t[1] = parseFloat(t[1]);
        return t;
      case "Z":
        t = d[0].split(",");
        t[0] = parseFloat(t[0].replace(t[0][0], ""));
        t[1] = parseFloat(t[1]);
        return t;
      default:
        t = d[i].split(",");
        return t;
    }
  }

  function getOffset(mouseLoc, pointLoc, mouseR) {
    let pointOffset = {};
    let d = sketch.dist(mouseLoc.x, mouseLoc.y, pointLoc.x, pointLoc.y);
    let reciprocal = mouseR / d;
    reciprocal = reciprocal > 1 ? 1 : reciprocal;
    let p = Math.pow(reciprocal, 2);
    let x = (mouseLoc.x - pointLoc.x) * p;
    let y = (mouseLoc.y - pointLoc.y) * p;
    pointOffset = {
      x: x,
      y: y,
    };
    return pointOffset;
  }
};

export const myp5 = new p5(s, "logoCanvas");
