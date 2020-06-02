function firstUpperCase(char) {
  let i = 0;
  let temp = char.split("");
  while (i<= temp.length-1) {
  let c = temp[i].charCodeAt(0);
    if (c >= 65 && c <= 90 )  {
        return temp[i];
    }
    i++;
  }
  return "not found";
}

console.log(firstUpperCase('chetanK'));