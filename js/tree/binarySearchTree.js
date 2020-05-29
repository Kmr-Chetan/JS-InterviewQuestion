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

// Depth first search using iterative method Inorder

BST.prototype.IterativeIOT = function (irterative) {
  let temp = irterative;
  let stack = [];
  while (temp !== null || stack.length) {
    while (temp !== null) {
      stack.push(temp);
      temp = temp.left;
    }
    temp = stack.pop();
    console.log("node", temp.value);
    temp = temp.right;
  }
};
// Depth first search using iterative method postOrder

BST.prototype.IterativePreOT = function (irterative) {
  let temp = irterative;
  let stack = [];
  while (temp !== null || stack.length) {
    while (temp !== null) {
      console.log("node", temp.value);
      stack.push(temp);
      temp = temp.left;
    }
    temp = stack.pop();
    temp = temp.right;
  }
};

BST.prototype.IterativePOT = function (irterative) {
  let temp = irterative;
  let stack = [];
  while (temp !== null || stack.length) {
    while (temp !== null) {
      stack.push(temp);
      temp = temp.left;
    }
    temp = stack.pop();
    console.log("node", temp.value);
    temp = temp.right;
  }
};

// breadth first search

BST.prototype.BreadthFirstSearch = function (irterative) {
  let queue = [this];
  while (queue.length) {
    let tree = queue.shift();
    irterative(tree);
    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);
  }
};

BST.prototype.getMinValue = function (irterative) {
  let min = {};
  min.number = irterative.value;
  let queue = [];
  queue.push(irterative);
  while (queue.length) {
    let treeNode = queue.shift();
    if (treeNode.value <= min.number) {
      min.number = treeNode.value;
    }
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
    
  }
  return min.number;
};

let bst = new BST(50);
bst.insert(30);
bst.insert(55);
bst.insert(51);
bst.insert(60);
bst.insert(70);
bst.insert(100);
bst.insert(7);
// console.log(bst.value);

// bst.DFS(log);
// bst.IterativeIOT(bst);
// bst.IterativePreOT(bst);
// bst.IterativePOT(bst);

// function log(node) {
//   console.log(node.value);
// }

// bst.BreadthFirstSearch(log);

console.log(bst.getMinValue(bst));
