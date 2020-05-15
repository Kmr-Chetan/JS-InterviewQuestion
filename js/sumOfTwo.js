function sumOfTwo(arr, num) {
  let index = [];
  let first = 0;
  let last = arr.length - 1;

  for (i = 0; i < arr.length; i++) {
    if (arr[first] + arr[last] === num) {
      index.push(first);
      index.push(last);
      return index;
    } else if (arr[first] + arr[last] < num) {
      console.log("first",first);
      first++;
    } else if (arr[first] + arr[last] > num) {
      console.log("last",last);
      last--;
    }  if (first === last) {
        console.log("not found")
    }
  }
}

console.log(sumOfTwo([2, 5, 7, 11, 19], 24));
