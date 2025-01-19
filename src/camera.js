let Camera = {
  x:500,
  y:500,
  z:-100,
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

    screenObjects[depth[i][0]].translate(Camera.x,Camera.y,Camera.z)
    screenObjects[depth[i][0]].draw();
    screenObjects[depth[i][0]].translate(-Camera.x,-Camera.y,-Camera.z)

  }  

}

function mouseWheel(event){
  if(event.delta < 0){
    // for(let i =0;i < screenObjects.length; i++){
    //   screenObjects[i].scale(1.1)

    // }
    Camera.z -= 10
  }
  if(event.delta > 0){
    // for(let i =0;i < screenObjects.length; i++){
    //   screenObjects[i].scale(0.9)
    // }
    Camera.z += 10

  }
  
}

function RotateObjects(valX,valY){
  for(let i =0; i < screenObjects.length;i++){
    screenObjects[i].rotate("y",valX)
    screenObjects[i].rotate("x",valY)

  }
}

function doubleClicked(){
  cube.perspective()
  cube2.perspective()
  cube3.perspective()

}

function CameraControls(){
  if (keyIsDown(LEFT_ARROW) === true) {
    Camera.x -= 1;
  }
  
  if (keyIsDown(RIGHT_ARROW) === true) {
    Camera.x += 1;
  }
  
  if (keyIsDown(UP_ARROW) === true) {
    Camera.y -= 1;
  }
  
  if (keyIsDown(DOWN_ARROW) === true) {
    Camera.y += 1;
  }
}