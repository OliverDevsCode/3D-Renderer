

function setup() {
  createCanvas(1000, 1000);
  // createBasicScene()
  createGameDemo()
  
}

function draw() {
  // frameRate(100) //Change for smoother experience
  angleMode(DEGREES)
  background(100);
  drawCameraView();
  CameraControls()
  
  //FPS COUNTER
  let fps = Math.floor(frameRate());
  push()
  fill(255,255,255)
  text(fps, 50, 50);
  pop()

}








