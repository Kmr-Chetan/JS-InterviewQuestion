//complxity of n*n O(n2)
function suffledSubstring(str, str2) {
  let n = str.split("").sort();
  let m = str2.split("").sort();

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (n[i] === m[j]) {
        console.log("suffled", n[i]);
      }
    }
  }
}
suffledSubstring("acfmn", "wbcdef");

//diffrent approach n*m O(nm)
function suffledSubstring2(str, str2) {
  let n = str.split("");
  let m = str2.split("");
  let suffled = "";
  let unique = {};
  for (let i = 0; i < m.length; i++) {
    unique[m[i]] = m[i];
  }

  for (let j = 0; j <= n.length; j++) {
    if (unique[n[j]]) {
      suffled += n[j];
    }
  }
  console.log(suffled);
}

suffledSubstring2("acfmn", "wbcdef");
