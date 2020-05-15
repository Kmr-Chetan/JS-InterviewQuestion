function hexToBinary(num, base) {
  const array = "";
  let arr = [];
  num.forEach((element) => {
    if (typeof element === "number") {
      arr = arr + convert(base, element);
    } else {
      arr = arr + convert(base, element.charCodeAt(0) - 58);
    }
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

hexToBinary([2, "E"], 2);
