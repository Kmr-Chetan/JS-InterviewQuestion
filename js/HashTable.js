function HashTable(size) {
  this.buckets = Array(size);
  this.numBckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

var myHT = new HashTable(30);

myHT.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBckets;
  return bucket;
};
myHT.insert = function(key, value) {
  var index = this.hash(key);
  // console.log(index);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};
myHT.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};

myHT.retriveAll = function() {
  var allNodes=[];
  for(let i= 0; i< this.numBckets; i++){
    var currentNode= this.buckets[i];
    while(currentNode){
      allNodes.push(currentNode);
      currentNode =currentNode.next
    }
  }
  return allNodes; 
};
myHT.insert('chetan', 'chetan@gmailkkk.com');

// console.log(myHT.get("chetan"));
console.log(myHT.retriveAll());
