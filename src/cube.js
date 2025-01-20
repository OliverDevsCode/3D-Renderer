class Cube{

  //faces stored in the style:
  //[topL , topR , bottomL, bottomR]
  faces;
  vertex1;
  vertex2;
  vertex3;
  vertex4;
  vertex5;
  vertex6;
  vertex7;
  vertex8;

  screenVertex1;
  screenVertex2;
  screenVertex3;
  screenVertex4;
  screenVertex5;
  screenVertex6;
  screenVertex7;
  screenVertex8;

  x;
  y;

  /**
 * Create a cube.
 * @constructor
 * @param {int} x - x
 * @param {int} y - y
 * @param {int} w - w
 * 
 */

  constructor(x,y,z,w){
    this.vertex1 = new Matrix(4, 1, [[(0-w/2)-x], [(0-w/2)-y], [(0-w/2)]-z,[1]]);
    this.vertex2 = new Matrix(4, 1, [[(w/2)-x], [(0-w/2)-y], [(0-w/2)]-z,[1]]);
    this.vertex3 = new Matrix(4, 1, [[(w/2)-x], [(w/2)-y], [(0-w/2)]-z,[1]]);
    this.vertex4 = new Matrix(4, 1, [[(0-w/2)-x], [(w/2)-y], [(0-w/2)]-z,[1]]);
    this.vertex5 = new Matrix(4, 1, [[(0-w/2)-x], [(0-w/2)-y], [(w/2)]-z,[1]]);
    this.vertex6 = new Matrix(4, 1, [[(w/2)-x], [(0-w/2)-y], [(w/2)]-z,[1]]);
    this.vertex7 = new Matrix(4, 1, [[(0-w/2)-x], [(w/2)-y], [(w/2)]-z,[1]]);
    this.vertex8 = new Matrix(4, 1, [[(w/2)-x], [(w/2)-y], [(w/2)]-z,[1]]);
    this.faces = {
      front: [this.vertex1.matrix,this.vertex2.matrix,
             this.vertex3.matrix,this.vertex4.matrix],
  
      back: [this.vertex5.matrix,this.vertex6.matrix,
             this.vertex8.matrix,this.vertex7.matrix],
      left: [this.vertex5.matrix,this.vertex1.matrix,
        this.vertex4.matrix,this.vertex7.matrix],
      right: [this.vertex2.matrix,this.vertex6.matrix,
        this.vertex8.matrix,this.vertex3.matrix],
      top: [this.vertex1.matrix,this.vertex2.matrix,
        this.vertex6.matrix,this.vertex5.matrix],
      base: [this.vertex3.matrix,this.vertex4.matrix,
            this.vertex7.matrix,this.vertex8.matrix],
    }
    this.x = x;
    this.y = y;
  }

  /**
 * Rotate.
 * @function
 * @param {string} axis - x,y,z
 * @param {int} angle - angle
 */
  rotate(axis,angle){
    angleMode(degrees)
    let rotateXAXIS = new Matrix(4,4,[
      [1,0,0,0],
      [0,cos(angle),-sin(angle),0],
      [0,sin(angle),cos(angle),0],
      [0,0,0,1]
    ])
    
    
    let rotateYAXIS = new Matrix(4,4,[
      [cos(angle),0,sin(angle),0],
      [0,1,0,0],
      [-sin(angle),0,cos(angle),0],
      [0,0,0,1]
    ])
    
    let rotateZAXIS = new Matrix(4,4,[
      [cos(angle),-sin(angle),0,0],
      [sin(angle),cos(angle),0,0],
      [0,0,1,0],
      [0,0,0,1]
    ])
    
    if(axis == "x"){
      this.vertex1 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(rotateXAXIS,this.vertex8))
      console.log(JSON.stringify(this.vertex1.matrix))
    }
    if(axis == "y"){
      this.vertex1 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(rotateYAXIS,this.vertex8))
      console.log(JSON.stringify(this.vertex1.matrix))


    }
    if(axis == "z"){
      this.vertex1 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(rotateZAXIS,this.vertex8))
      console.log(JSON.stringify(this.vertex1.matrix))

    }

    this.faces = {
      front: [this.vertex1.matrix,this.vertex2.matrix,
             this.vertex3.matrix,this.vertex4.matrix],
  
      back: [this.vertex5.matrix,this.vertex6.matrix,
             this.vertex8.matrix,this.vertex7.matrix],
      left: [this.vertex5.matrix,this.vertex1.matrix,
             this.vertex4.matrix,this.vertex7.matrix],
      right: [this.vertex2.matrix,this.vertex6.matrix,
        this.vertex8.matrix,this.vertex3.matrix],
      top: [this.vertex1.matrix,this.vertex2.matrix,
        this.vertex6.matrix,this.vertex5.matrix],
      base: [this.vertex3.matrix,this.vertex4.matrix,
        this.vertex7.matrix,this.vertex8.matrix],
    }

  }

  /**
 * Camera Rotate.
 * @function
 * @param {string} axis - x,y,z
 * @param {int} angle - angle
 */
  cameraRotate(axis,angle){
    angleMode(degrees)
    let rotateXAXIS = new Matrix(4,4,[
      [1,0,0,0],
      [0,cos(angle),-sin(angle),0],
      [0,sin(angle),cos(angle),0],
      [0,0,0,1]
    ])
    
    
    let rotateYAXIS = new Matrix(4,4,[
      [cos(angle),0,sin(angle),0],
      [0,1,0,0],
      [-sin(angle),0,cos(angle),0],
      [0,0,0,1]
    ])
    
    let rotateZAXIS = new Matrix(4,4,[
      [cos(angle),-sin(angle),0,0],
      [sin(angle),cos(angle),0,0],
      [0,0,1,0],
      [0,0,0,1]
    ])
    
    if(axis == "x"){
      this.screenVertex1 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(rotateXAXIS,this.screenVertex8))
      console.log(JSON.stringify(this.screenVertex1.matrix))
    }
    if(axis == "y"){
      this.screenVertex1 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(rotateYAXIS,this.screenVertex8))
      console.log(JSON.stringify(this.screenVertex1.matrix))


    }
    if(axis == "z"){
      this.screenVertex1 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(rotateZAXIS,this.screenVertex8))
      console.log(JSON.stringify(this.screenVertex1.matrix))

    }

    this.screenVaces = {
      front: [this.screenVertex1.matrix,this.screenVertex2.matrix,
             this.screenVertex3.matrix,this.screenVertex4.matrix],
  
      back: [this.screenVertex5.matrix,this.screenVertex6.matrix,
             this.screenVertex8.matrix,this.screenVertex7.matrix],
      left: [this.screenVertex5.matrix,this.screenVertex1.matrix,
             this.screenVertex4.matrix,this.screenVertex7.matrix],
      right: [this.screenVertex2.matrix,this.screenVertex6.matrix,
        this.screenVertex8.matrix,this.screenVertex3.matrix],
      top: [this.screenVertex1.matrix,this.screenVertex2.matrix,
        this.screenVertex6.matrix,this.screenVertex5.matrix],
      base: [this.screenVertex3.matrix,this.screenVertex4.matrix,
        this.screenVertex7.matrix,this.screenVertex8.matrix],
    }

  }

  

  /**
 * Scale.
 * @function
 * @param {int} val - scale
 */
  scale(val){
    let scaleMatrix = new Matrix(4,4,[
      [val,0,0,0],
      [0,val,0,0],
      [0,0,val,0],
      [0,0,0,1]
    ])
      this.vertex1 = new Matrix(4,1,multiply(scaleMatrix,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(scaleMatrix,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(scaleMatrix,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(scaleMatrix,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(scaleMatrix,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(scaleMatrix,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(scaleMatrix,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(scaleMatrix,this.vertex8))
  }

   /**
 * Translate.
 * @function
 * @param {int} x - x size
 * @param {int} y - y size
 * @param {int} z - z size
 */
  translate(x,y,z){


    let translateMatrix = new Matrix(4,4,[
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
      ])
  
    
      this.vertex1 = new Matrix(4,1,multiply(translateMatrix,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(translateMatrix,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(translateMatrix,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(translateMatrix,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(translateMatrix,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(translateMatrix,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(translateMatrix,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(translateMatrix,this.vertex8))


  }

   /**
 * Camera Translate.
 * @function
 * @param {int} x - x size
 * @param {int} y - y size
 * @param {int} z - z size
 */
   cameraTranslate(x,y,z){


    let translateMatrix = new Matrix(4,4,[
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
      ])
  
    
      this.screenVertex1 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(translateMatrix,this.screenVertex8))


  }

  perspective(){
    let fov = 45; // degrees
    let aspect = 1; // aspect ratio (for a 1000x1000 canvas)
    let n = 1; // near plane distance
    let f = -1000 // far plane distance
    
    // Calculate the frustum bounds based on the fov and aspect ratio
    let t = n * Math.tan((fov / 2) * Math.PI / 180);
    let b = -t;
    let r = t * aspect;
    let l = -r;

    let perspectiveMatrix = new Matrix (4,4,[
      [2 * n / (r - l), 0, (r + l) / (r - l), 0],
      [0, 2 * n / (t - b), (t + b) / (t - b), 0],
      [0, 0, -(f + n) / (f - n), -2 * f * n / (f - n)],
      [0, 0, -1, 0]]);
      
      console.log("Vertex Start",JSON.stringify(this.screenVertex1.matrix))

      
      this.screenVertex1 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(perspectiveMatrix,this.screenVertex8))

      console.log("Vertex After",JSON.stringify(this.screenVertex1.matrix))


      // Perspective division for vertex1
      let w1 = this.screenVertex1.matrix[3]; // Extract w'
      console.log("w1",w1)
      this.screenVertex1.matrix[0] /= w1;    // x' / w'
      this.screenVertex1.matrix[1] /= w1;    // y' / w'
      this.screenVertex1.matrix[2] /= w1;    // z' / w'
      this.screenVertex1.matrix[3] = 1;      // Normalize w' to 1

      let w2 = this.screenVertex2.matrix[3];
      this.screenVertex2.matrix[0] /= w2;
      this.screenVertex2.matrix[1] /= w2;
      this.screenVertex2.matrix[2] /= w2;
      this.screenVertex2.matrix[3] = 1;

      let w3 = this.screenVertex3.matrix[3];
      this.screenVertex3.matrix[0] /= w3;
      this.screenVertex3.matrix[1] /= w3;
      this.screenVertex3.matrix[2] /= w3;
      this.screenVertex3.matrix[3] = 1;

      let w4 = this.screenVertex4.matrix[3];
      this.screenVertex4.matrix[0] /= w4;
      this.screenVertex4.matrix[1] /= w4;
      this.screenVertex4.matrix[2] /= w4;
      this.screenVertex4.matrix[3] = 1;

      let w5 = this.screenVertex5.matrix[3];
      this.screenVertex5.matrix[0] /= w5;
      this.screenVertex5.matrix[1] /= w5;
      this.screenVertex5.matrix[2] /= w5;
      this.screenVertex5.matrix[3] = 1;

      let w6 = this.screenVertex6.matrix[3];
      this.screenVertex6.matrix[0] /= w6;
      this.screenVertex6.matrix[1] /= w6;
      this.screenVertex6.matrix[2] /= w6;
      this.screenVertex6.matrix[3] = 1;

      let w7 = this.screenVertex7.matrix[3];
      this.screenVertex7.matrix[0] /= w7;
      this.screenVertex7.matrix[1] /= w7;
      this.screenVertex7.matrix[2] /= w7;
      this.screenVertex7.matrix[3] = 1;

      let w8 = this.screenVertex8.matrix[3];
      this.screenVertex8.matrix[0] /= w8;
      this.screenVertex8.matrix[1] /= w8;
      this.screenVertex8.matrix[2] /= w8;
      this.screenVertex8.matrix[3] = 1;

      console.log("Vertex end",JSON.stringify(this.screenVertex1.matrix))

      //map to screen

      let map = new Matrix(4,4,[
          [width / 2,0,0, width / 2],
          [0,-height / 2,0, height / 2],
          [0,0,1,0],
          [0,0,0,1]
      ])

      this.screenVertex1 = new Matrix(4,1,multiply(map,this.screenVertex1))
      this.screenVertex2 = new Matrix(4,1,multiply(map,this.screenVertex2))
      this.screenVertex3 = new Matrix(4,1,multiply(map,this.screenVertex3))
      this.screenVertex4 = new Matrix(4,1,multiply(map,this.screenVertex4))
      this.screenVertex5 = new Matrix(4,1,multiply(map,this.screenVertex5))
      this.screenVertex6 = new Matrix(4,1,multiply(map,this.screenVertex6))
      this.screenVertex7 = new Matrix(4,1,multiply(map,this.screenVertex7))
      this.screenVertex8 = new Matrix(4,1,multiply(map,this.screenVertex8))

      console.log("After map",JSON.stringify(this.screenVertex1.matrix))


  }

  draw(cameraX,cameraY,cameraZ,xYaw,yYaw,zYaw){

    
    this.screenVertex1 = new Matrix(4,1,this.vertex1.matrix)
    this.screenVertex2 = new Matrix(4,1,this.vertex2.matrix)
    this.screenVertex3 = new Matrix(4,1,this.vertex3.matrix)
    this.screenVertex4 = new Matrix(4,1,this.vertex4.matrix)
    this.screenVertex5 = new Matrix(4,1,this.vertex5.matrix)
    this.screenVertex6 = new Matrix(4,1,this.vertex6.matrix)
    this.screenVertex7 = new Matrix(4,1,this.vertex7.matrix)
    this.screenVertex8 = new Matrix(4,1,this.vertex8.matrix)


    this.cameraTranslate(500,500,0)
    this.cameraTranslate(-cameraX,-cameraY,-cameraZ)
    this.cameraRotate("x",xYaw)
    this.cameraRotate("y",yYaw)
    this.cameraRotate("z",zYaw)
    this.perspective()




    this.faces = {
      front: [this.screenVertex1.matrix,this.screenVertex2.matrix,
             this.screenVertex3.matrix,this.screenVertex4.matrix],
      back: [this.screenVertex5.matrix,this.screenVertex6.matrix,
             this.screenVertex8.matrix,this.screenVertex7.matrix],
      left: [this.screenVertex5.matrix,this.screenVertex1.matrix,
             this.screenVertex4.matrix,this.screenVertex7.matrix],
      right: [this.screenVertex2.matrix,this.screenVertex6.matrix,
             this.screenVertex8.matrix,this.screenVertex3.matrix],
      top: [this.screenVertex1.matrix,this.screenVertex2.matrix,
           this.screenVertex6.matrix,this.screenVertex5.matrix],
      base: [this.screenVertex3.matrix,this.screenVertex4.matrix,
            this.screenVertex7.matrix,this.screenVertex8.matrix],
    }
    
    let PosOrder = []

    PosOrder.push(["front",this.drawOrder(this.faces.front)])
    PosOrder.push(["left",this.drawOrder(this.faces.left)])
    PosOrder.push(["right",this.drawOrder(this.faces.right)])
    PosOrder.push(["back",this.drawOrder(this.faces.back)])
    PosOrder.push(["top",this.drawOrder(this.faces.top)])
    PosOrder.push(["base",this.drawOrder(this.faces.base)])

    PosOrder = PosOrder.sort((b, a) => a[1] - b[1]) 

    // console.log("Closet ", PosOrder.at(-1)[0])

    //draw the faces in the order of this array
    for(let i =0; i < PosOrder.length;i++){
      for(let j = 0; j < 4; j ++){
        circle(this.faces[PosOrder[i][0]][j][0][0],this.faces[PosOrder[i][0]][j][1][0],10)
      }
      push()
      fill(this.colourFace(PosOrder[i][0]))
      quad(this.faces[PosOrder[i][0]][0][0][0],this.faces[PosOrder[i][0]][0][1][0],
          this.faces[PosOrder[i][0]][1][0][0],this.faces[PosOrder[i][0]][1][1][0],
          this.faces[PosOrder[i][0]][2][0][0],this.faces[PosOrder[i][0]][2][1][0],
          this.faces[PosOrder[i][0]][3][0][0],this.faces[PosOrder[i][0]][3][1][0]
      )
      pop()
    }

  }

  drawOrder(face){
    //vertex 1 z - vertex 4 z
    let zPos = (face[0][2][0]+face[1][2][0]+face[2][2][0]+face[3][2][0])/4
    return zPos
  }

  colourFace(face){
    if(face == "front"){
      return "#FF0000"
    }
    if(face == "back"){
      return "#00FF00"
    }
    if(face == "left"){
      return "#f5d142"
    }
    if(face == "right"){
      return "#4254f5"
    }
    if(face == "top"){
      return "#f59342"
    }
    if(face == "base"){
      return "#f542d1"
    }
  }

  //setter for x
  x(val){
    this.x = val
  }
  //setter for x

  y(val){
    this.y = val
  }

}
