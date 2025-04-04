let screenObjects = []
let cube;
let cube2;
let cube3;
let zCube; //for testing z cord
let xaxis;
let yaxis;
let zaxis;

let ground;
let grassBlock1;
let grassBlock2;
let grassBlock3;

function createBasicScene(){
  //3D Objects For Testing
  cube = new Cube(200,200,0,100)
  cube2 = new Cube(400,200,0,100)
  cube3 = new Cube(0,30,0,100)
  zCube = new Cube(0,0,2000,100)
  yaxis = new Rectangle(0,10,0,2,2,500)
  zaxis = new Rectangle(0,10,0,500,2,2)
  xaxis = new Rectangle(0,10,0,2,500,2)

  screenObjects.push(cube,cube2,cube3,xaxis,yaxis,zaxis,zCube);

}

function createGameDemo(){
  //3D Game Enviroment
  ground = new Rectangle(0,0,0,500,500,2)
  ground.translate(0,-500,0)
  grassBlock1 = new Cube(0,0,0,100)
  grassBlock1.translate(-200,-450,0)

  grassBlock2 = new Cube(0,0,300,100)
  
  grassBlock3 = new Cube(0,0,0,100)
  grassBlock2.rotate("z",PI/2)
  grassBlock2.rotate("y",PI/2)
  grassBlock2.translate(200,-450,-200)
  grassBlock3.rotate("z",PI/2)
  grassBlock3.rotate("y",PI)
  grassBlock3.translate(100,-450,-200)

  screenObjects.push(ground,grassBlock1,grassBlock2,grassBlock3); 

}

let placeMode = false
let mouseCube;
function addCube(){
  if(placeMode == true){
    mouseCube = new Cube(-mouseX + 500,mouseY,0,100)
    mouseCube.draw(Camera.fov,Camera.x,Camera.y,Camera.z,Camera.PITCH,Camera.YAW,Camera.ROLL)
  }
}