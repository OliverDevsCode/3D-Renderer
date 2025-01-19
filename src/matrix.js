// Matrix class
function Matrix(rows, cols, array) {
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];

  if (array === undefined) {
    for (var i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  } else {
    this.matrix = array;
  }
}

Matrix.prototype.add = function (n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] += n;
    }
  }
};

Matrix.prototype.multiply = function (n) {
  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.matrix[i][j] *= n;
    }
  }
};


function multiply(a,b){

  let newMatrix = []
  for(let i = 0; i < a.rows; i++){
    let row = []
    let rowData = 0
    for(let j = 0 ; j<a.cols;j++){
      rowData += (a.matrix[i][j])*(b.matrix[j])

    }
    row.push(rowData)
    newMatrix.push(row)

  }
  return newMatrix
}

