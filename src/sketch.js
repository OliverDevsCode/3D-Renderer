let cube;
let cube2;
let cube3;
let zCube; //for testing z cord
let rectangle;
let xaxis;
let yaxis;
let zaxis;



let screenObjects = []

function setup() {
  createCanvas(1000, 1000);

  //GUI
  gui = createGui();
  joystick = createJoystick("Joystick",10,height-200, 175, 175, 2, -2, -2, 2);

  //3D Objects
  cube = new Cube(200,200,0,100)
  cube2 = new Cube(400,200,0,100)
  cube3 = new Cube(0,30,0,50)
  zCube = new Cube(0,0,-200,25)
  yaxis = new Rectangle(0,10,0,2,2,500)
  zaxis = new Rectangle(0,10,0,500,2,2)
  xaxis = new Rectangle(0,10,0,2,500,2)
  screenObjects.push(cube,cube2,cube3,xaxis,yaxis,zaxis,zCube); 

}

function draw() {
  // frameRate(100)
  angleMode(DEGREES)

  background(100);


  drawGui()
  drawCameraView();

  CameraControls()
  
  RotateObjects(joystick.valX,joystick.valY);

  let fps = Math.floor(frameRate());
  push()
  fill(255,255,255)
  text(fps, 50, 50);
  pop()

}








