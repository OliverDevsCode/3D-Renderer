let isPointerLocked = false;
let deltaX = 0;
let deltaY = 0;

function setup() {
  createCanvas(1000, 1000);

  // createBasicScene()
  createGameDemo()

  // Add event listeners for pointer lock
  document.addEventListener('pointerlockchange', onPointerLockChange);
  document.addEventListener('mousemove', onMouseMove);
  
}

function draw() {
  // frameRate(160) //Change for smoother experience
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








