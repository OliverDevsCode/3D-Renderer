let Camera = {
  x:500,
  y:500,
  z:500,
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
    this.translate(width/2,height/2,1)
    screenObjects[depth[i][0]].draw()
    this.translate(-(width/2),-(height/2),1)

  }  

}

function mouseWheel(event){
  if(event.delta < 0){
    for(let i =0;i < screenObjects.length; i++){
      screenObjects[i].scale(1.1)

    }
  }
  if(event.delta > 0){
    for(let i =0;i < screenObjects.length; i++){
      screenObjects[i].scale(0.9)
    }
  }
  
}

function RotateObjects(valX,valY){
  for(let i =0; i < screenObjects.length;i++){
    screenObjects[i].rotate("y",valX)
    screenObjects[i].rotate("x",valY)

  }
}

function doubleClicked(){
  cube.perspective(45)
  cube2.perspective(45)
  cube3.perspective(45)

}
