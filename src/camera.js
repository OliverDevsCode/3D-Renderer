let Camera = {
  x:0,
  y:0,
  z:1000,
  xYaw:0,
  yYaw:0,
  zYaw:0,
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
    screenObjects[depth[i][0]].draw(Camera.fov,Camera.x,Camera.y,Camera.z,Camera.xYaw,Camera.yYaw,Camera.zYaw);
  }  
}

function mouseWheel(event){
  if(event.delta < 0){
    Camera.z -= 10;
  }
  if(event.delta > 0){
    Camera.z += 10;

  }
}

function CameraControls(){
  if (keyIsDown(LEFT_ARROW) === true) {
    Camera.x -= 10;
  }
  
  if (keyIsDown(RIGHT_ARROW) === true) {
    Camera.x += 10;
  }
  
  if (keyIsDown(UP_ARROW) === true) {
    Camera.y += 10;
  }
  
  if (keyIsDown(DOWN_ARROW) === true) {
    Camera.y -= 10;
  }

  //W +Y ROTATION
  if (keyIsDown(87) === true) {
    Camera.xYaw -= 1;
  }

  //S -Y ROTATION
  if (keyIsDown(83) === true) {
    Camera.xYaw += 1;
  }
  
  //A -X ROTATION
  if (keyIsDown(65) === true) {
    Camera.yYaw -= 1;
    // Camera.zYaw += 1;

  }

  //D X ROTATION
  if (keyIsDown(68) === true) {
    Camera.yYaw += 1;
  }
}