const thortling = (fn, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

document.getElementById("button").addEventListener(
  "click",
  thortling(() => {
    console.log("click");
  }, 5000)
);
