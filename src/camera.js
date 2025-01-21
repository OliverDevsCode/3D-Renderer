let Camera = {
  x:0,
  y:0,
  z:1000,
  PITCH:0,
  YAW:0,
  ROLL:0,
  fov:45,
}

function drawCameraView(){
  
  depth = []
  for(let i =0; i < screenObjects.length;i++){
    // calculate average Z pos of each
    let zAverage = (screenObjects[i].vertex1.matrix[2][0]+
                    screenObjects[i].vertex2.matrix[2][0]+
                    screenObjects[i].vertex3.matrix[2][0]+
                    screenObjects[i].vertex4.matrix[2][0]+
                    screenObjects[i].vertex5.matrix[2][0]+
                    screenObjects[i].vertex6.matrix[2][0]+
                    screenObjects[i].vertex7.matrix[2][0]+
                    screenObjects[i].vertex8.matrix[2][0])/8;
    
    depth.push([i,zAverage])
  }
  depth = depth.sort((b, a) => a[1] - b[1]) 
  for(let i =0; i < depth.length;i++){
    screenObjects[depth[i][0]].draw(Camera.fov,Camera.x,Camera.y,Camera.z,Camera.PITCH,Camera.YAW,Camera.ROLL);
  }  
}

function mouseWheel(event){
  if(event.delta < 0){
    Camera.fov -= 2.5;
    

  }
  if(event.delta > 0){
    Camera.fov += 2.5;
    


  }
}
let prevX = 500;
let prevY = 0;
function mouseMoved(){
  if(mouseY != prevY){
    Camera.PITCH -= (prevY-mouseY)/10;
    prevY = mouseY
  }
  if(mouseX != prevX){
    Camera.YAW -= (prevX-mouseX)/10;
    prevX = mouseX
  }
}

function CameraControls(){
  if (keyIsDown(LEFT_ARROW) === true) {
    Camera.YAW -= 1;

  }
  
  if (keyIsDown(RIGHT_ARROW) === true) {
    Camera.YAW += 1;
  }
  
  if (keyIsDown(UP_ARROW) === true) {
     Camera.PITCH -= 1;

  }
  
  if (keyIsDown(DOWN_ARROW) === true) {
    Camera.PITCH += 1;

  }

  //W +Y ROTATION
  if (keyIsDown(87) === true) {
    Camera.z -= cos(Camera.YAW)*10
    Camera.x -= sin(Camera.ROLL)*10
    Camera.y -= sin(Camera.PITCH)*10
   
  }

  //S -Y ROTATION
  if (keyIsDown(83) === true) {
    
    Camera.z += cos(Camera.YAW)*10
    Camera.x += sin(Camera.ROLL)*10
    Camera.y += sin(Camera.PITCH)*10
  }
  
  //A -X ROTATION
  if (keyIsDown(65) === true) {
    Camera.x -= 10;


  }

  //D X ROTATION
  if (keyIsDown(68) === true) {
    Camera.x += 10;

  }

  if (keyIsDown(81) === true) {
    Camera.y -= 10;

  }
  if (keyIsDown(69) === true) {
    Camera.y += 10;

  }
}
