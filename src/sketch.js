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
  angleMode(DEGREES)

  background(100);

  drawGui()

  drawCameraView();

  RotateObjects(joystick.valX,joystick.valY);
  
}




//MOVE A SQUARE
// if (keyIsDown(UP_ARROW) === true) {
//   cube.translate(0,-2,0)
// }

// if (keyIsDown(DOWN_ARROW) === true) {
//   cube.translate(0,2,0)
// }
// if (keyIsDown(LEFT_ARROW) === true) {
//   cube.translate(-2,0,0)

// }

// if (keyIsDown(RIGHT_ARROW) === true) {
//   cube.translate(2,0,0)

// }







