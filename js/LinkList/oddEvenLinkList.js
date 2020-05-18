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
  addNode(data) {
    let newNode = new Node(data);
    let current;
    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next !== null) {
        // console.log(current.data);
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
// oddEvenLinkList
  oddEvenLinkList() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      let currentInteger = 1;
      let current = this.head;
      while (current !== null) {
        if (currentInteger % 2 === 0) {
          console.log(current.data);
        } else {
          console.log(current.data);
        }
        current = current.next;
      }
    }
  }
}

var ll = new LinkList();
ll.addNode(3);
ll.addNode(4);
// ll.addNode(3);
// ll.addNode(5);
// ll.addNode(1);
ll.oddEvenLinkList();
