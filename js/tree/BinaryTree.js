class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertData(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, data);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, node);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, node);
      }
    }
  }
  insertNodeThroughItrrativeMethod(node, newNode) {
    let current = node;
    while (true) {
      if (current.data < newNode.data) {
        if (node.left === null) {
          current.left = newNode;
          return;
        } else {
          current = node.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = node.right;
        }
      }
    }
  }

  inOrderTraversal() {
    if (this.root === null) {
      console.log("No data");
    } else {
      let X = this.root;
      while (X == null) {
        Y = X;
        console.log(x.data);
        x = x.left;
      }
    }
  }
}
