function setup() {
  let canvas;
  canvas = createCanvas(400, 300);
  let canvasparent;
  canvasparent = select('#canvas-goes-here');
  canvas.parent(canvasparent);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}
