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



