let isPointerLocked = false;
let deltaX = 0;
let deltaY = 0;
let addButton;
let grassTopTex 
let grassSideTex
let textures = []
let loadingTex = true;
let cnv;
let pixelArrays = [];

function preload(){
  //load textures
  grassSideTex = loadImage('../public/GrassSide.png')
  grassTopTex = loadImage('../public/GrassTop.png')
  grassBaseTex = loadImage('../public/GrassBase.png')
}

async function setup() {
  cnv = createCanvas(1000, 1000);
  pixelDensity(1);
  cnv.style('border', '10px solid black');

  // Process textures once after preload

  // createBasicScene()
  createGameDemo()

  // Add event listeners for pointer lock
  document.addEventListener('pointerlockchange', onPointerLockChange);
  document.addEventListener('mousemove', onMouseMove);
  addButton = createButton('Place Cube')
  addButton.position(windowWidth/2 + width/2 +100,height/2)
  addButton.style('padding', '15px 30px');
  addButton.style('font-size', '20px');
  addButton.style('background', '#4CAF50');
  addButton.style('color', 'white');
  addButton.style('border', 'none');
  addButton.style('border-radius', '8px');
  addButton.style('cursor', 'pointer');
  addButton.style('box-shadow', '0px 5px 15px rgba(0,0,0,0.2)');
  
}

function draw() {

  frameRate(100) //Change for smoother experience
  angleMode(DEGREES)
  background(255);
  drawCameraView();
  CameraControls()
  
  //FPS COUNTER
  let fps = Math.floor(frameRate());
  push()
  fill(255,255,255)
  text(fps, 50, 50);
  pop()
  addCube()
  addButton.mousePressed( () =>{
    placeMode = true
    console.log('place mode enter')
  })
}







