class Rectangle{

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

  x;
  y;
  z;

  /**
 * Create a rectangle.
 * @constructor
 * @param {int} x - x
 * @param {int} y - y
 * @param {int} l - l
 * @param {int} h - h
 * @param {int} w - w
 * 
 * 
 */

  constructor(x,y,z,w,l,h){
    this.vertex1 = new Matrix(4, 1, [[(0-l/2)-x], [(0-h/2)-y], [0-w/2]-z,[1]]);
    this.vertex2 = new Matrix(4, 1, [[(l/2)-x], [(0-h/2)-y], [0-w/2]-z,[1]]);
    this.vertex3 = new Matrix(4, 1, [[(l/2)-x], [(h/2)-y], [0-w/2]-z,[1]]);
    this.vertex4 = new Matrix(4, 1, [[(0-l/2)-x], [(h/2)-y], [0-w/2]-z,[1]]);
    this.vertex5 = new Matrix(4, 1, [[(0-l/2)-x], [(0-h/2)-y], [w/2]-z,[1]]);
    this.vertex6 = new Matrix(4, 1, [[(l/2)-x], [(0-h/2)-y], [w/2]-z,[1]]);
    this.vertex7 = new Matrix(4, 1, [[(0-l/2)-x], [(h/2)-y], [w/2]-z,[1]]);
    this.vertex8 = new Matrix(4, 1, [[(l/2)-x], [(h/2)-y], [w/2]-z,[1]]);
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
    this.z = z;
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

  perspective(distance){
    let fov = 45; // degrees
    let aspect = width/height; // aspect ratio (for a 1000x1000 canvas)
    let n = 1 * distance; // near plane distance
    let f = 1000 * distance; // far plane distance
    
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
    

      this.vertex1 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex1))
      this.vertex2 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex2))
      this.vertex3 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex3))
      this.vertex4 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex4))
      this.vertex5 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex5))
      this.vertex6 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex6))
      this.vertex7 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex7))
      this.vertex8 = new Matrix(4,1,multiply(perspectiveMatrix,this.vertex8))
  }

  draw(){
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
