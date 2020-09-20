function onePlus(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] < 9) {
      num[i] = num[i] + 1;
      return num;
    } else {
      num[i] = 0;
    }
  }
  num.unshift(1);
  return num;
}

console.log(onePlus([1, 2, 9]));
