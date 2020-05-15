class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(params) {
    var node = new Node(params);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printList() {
    var current = this.head;
    if (this.head === null) {
      console.log("list is empty");
    } else {
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  palindrome() {
    var current = this.head;
    var currentList = "";
    var reverseList = "";
    if (this.head === null) {
      console.log("listis empty");
    } else {
      while (current !== null) {
        currentList = `${current.data}${currentList}`;
        reverseList = `${reverseList}${current.data}`;
        current = current.next;
      }
    }
    if (currentList === reverseList) {
      console.log("list is palindrome", currentList);
    }
    else{
        console.log("list is not palindrome", currentList);

    }
  }
}

var ll = new LinkList();
ll.addNode(40);
ll.addNode(20);
ll.addNode(30);
ll.addNode(20);
ll.addNode(10);
// ll.printList();
ll.palindrome();
