let phaseAnimation = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  lights();
  phaseAnimation += 0.1;
  phaseAnimation = phaseAnimation % 30;
  for(let i = 0; i < 30; i++){
    drawMoon(i, -height/2);
  }
  drawMoon(phaseAnimation, 0);
  //text("moonphase: "+phaseAnimation, width/2, 100);
  fill(255, 0, 0);
  ellipse(0, 0, 200, 200);
  
}

function drawMoon(phase, h) { //phase 0-30
  fill(255, 255, 0);
  let xLoc = map(phase, 0, 30, -width/3, width/3);
  console.log(xLoc);
  push();
  noStroke();
  translate(xLoc, h, 0);
  sphere(50, 6, 6);
  pop();
}