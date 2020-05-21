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

let bst = new BST(50);
bst.insert(30);
bst.insert(40);
bst.insert(60);
bst.insert(70);
bst.insert(100);
console.log(bst);
