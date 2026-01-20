let phaseAnimation = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  phaseAnimation += 0.1;
  phaseAnimation = phaseAnimation % 30;
  for(let i = 0; i < 30; i++){
    drawMoon(i, 50);
  }
  drawMoon(phaseAnimation, height/2);
  text("moonphase: "+phaseAnimation, width/2, 100);
  fill(0);
  ellipse(width/2, height/2, 50, 50);
}

function drawMoon(phase, h) { //phase 0-30
  fill(255, 255, 0);
  let xLoc = map(phase, 0, 30, width/2-30, width/2+30);
  ellipse(xLoc, h, 50, 50)
}