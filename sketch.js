let canvas, ctx;
let lastX, lastY;
let brushSize = 7;
let imgzitie;

function preload() {
  imgzitie = loadImage('zitie.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  ctx = canvas.drawingContext;
  tint(255,70)
   image(imgzitie, -100, -400, 500, 700);
}

function draw() {
 text("Follow the words depicted on the picture",50, 50)
  
  if (mouseIsPressed) {
    let distance = dist(mouseX, mouseY, lastX, lastY);
    let newBrushSize = brushSize + noise(frameCount / 10) * 20;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = newBrushSize;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    lastX = mouseX;
    lastY = mouseY;
  }
}

function mousePressed() {
  lastX = mouseX;
  lastY = mouseY;
}

function touchMoved() {
  draw();
  return false;
}
