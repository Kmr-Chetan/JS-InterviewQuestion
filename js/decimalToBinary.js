function decimalToBinary(num, base) {
    const array = num.split("");
    let arr = [];
    array.forEach((element) => {
      arr.push(convert(base, element));
    });
    console.log(arr);
  }
  
  function convert(base, element) {
    let res = "";
    let rem = element;
    while (rem > 0) {
      result = rem % 2;
      res = result + res;
      rem = Math.floor(rem / base);
    }
    return res;
  }
  
  decimalToBinary("234", 2);
  