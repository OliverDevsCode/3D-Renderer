let cube;
let cube2;
let cube3;
let rectangle;
let grid;



let screenObjects = []

function setup() {
  createCanvas(1000, 1000);

  //GUI
  gui = createGui();
  joystick = createJoystick("Joystick",10,height-200, 175, 175, 2, -2, -2, 2);

  //3D Objects
  cube = new Cube(200,200,100)
  cube2 = new Cube(400,200,100)
  cube3 = new Cube(0,0,50)
  rectangle = new Rectangle(70,80,200,100,20)
  // grid = new Rectangle(500,500,1000,1000,5) //add grid back
  screenObjects.push(cube,cube2,cube3,rectangle); //add grid back when uncommenting

}

function draw() {
  // frameRate(100)
  angleMode(DEGREES)

  background(100);

  drawGui()
  drawCameraView();

  CameraControls()
  
  RotateObjects(joystick.valX,joystick.valY);

  let fps = frameRate();
  push()
  fill(255,255,255)
  text(fps, 50, 50);
  pop()

}








