function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if (!this.right) {
      this.right = new BST(value);
    } else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) {
    return value;
  } else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

// Depth first search using recursive method
// In order

BST.prototype.DFS = function (irterative) {
  if (this.left) this.left.DFS(irterative);
  irterative(this.value);
  if (this.right) this.right.DFS(irterative);
};

// Depth first search using iterative method

BST.prototype.IteraticeDFS = function (irterative) {
  let temp = irterative;
  let stack = [];
  while (temp !== null || stack.length) {
    while (temp !== null) {
      stack.push(temp);
      temp = temp.left;
    }
    temp = stack.pop();
    console.log("node",temp.value);
    temp = temp.right;
  }
};

let bst = new BST(50);
bst.insert(30);
bst.insert(55);
bst.insert(51);
bst.insert(60);
bst.insert(70);
bst.insert(100);
// console.log(bst.value);

// bst.DFS(log);
bst.IteraticeDFS(bst);

// function log(value) {
//   console.log(value);
// }
