let Camera = {
  x:0,
  y:-100,
  z:1000,
  PITCH:20,
  YAW:0,
  ROLL:0,
  fov:45,
}

function drawCameraView(){

  
  depth = []
  for(let i =0; i < screenObjects.length;i++){
    // calculate average Z pos of each
    if(frameCount > 1){
        let zAverage = (screenObjects[i].vertex1.matrix[2][0]+
        screenObjects[i].screenVertex2.matrix[2][0]+
        screenObjects[i].screenVertex3.matrix[2][0]+
        screenObjects[i].screenVertex4.matrix[2][0]+
        screenObjects[i].screenVertex5.matrix[2][0]+
        screenObjects[i].screenVertex6.matrix[2][0]+
        screenObjects[i].screenVertex7.matrix[2][0]+
        screenObjects[i].screenVertex8.matrix[2][0])/8;

        depth.push([i,zAverage])
    }else{
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
    
  }
  depth = depth.sort((a, b) => a[1] - b[1]) 
  for(let i =0; i < depth.length;i++){
    screenObjects[depth[i][0]].draw(Camera.fov,Camera.x,Camera.y,Camera.z,Camera.PITCH,Camera.YAW,Camera.ROLL);
  }  
  console.log(`Depth ${depth}`)
}




