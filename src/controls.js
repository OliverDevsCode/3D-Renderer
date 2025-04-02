function mouseWheel(event){
  if(event.delta < 0){
    Camera.fov -= 2.5;
  }
  if(event.delta > 0){
    Camera.fov += 2.5;
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

function doubleClicked() {
  if (!isPointerLocked) {
    canvas.requestPointerLock();
  }
  if(placeMode == true){
    placeMode = false
    screenObjects.push(mouseCube)
  }
}



// Event listener for pointer lock change
function onPointerLockChange() {
  isPointerLocked = document.pointerLockElement === canvas;
  if (!isPointerLocked) {
    console.log("Pointer unlocked!");
  }
}

// Event listener for mouse movement
function onMouseMove(event) {
  if (isPointerLocked) {
    // Update deltas
    deltaX = event.movementX;
    deltaY = event.movementY;
    Camera.PITCH += (deltaY)/10;
    Camera.YAW += (deltaX)/10;
  
  }
}

