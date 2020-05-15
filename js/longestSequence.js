function lgSequence(arr) {
  let sort = arr.sort((a, b) => a - b);
  let first = sort[0];
  let lgSeq = [];
  for (let i = 1; i < sort.length; i++) {
    if (sort[i] === first + 1) {
      lgSeq.push(i);
      first = sort[i];
    } else {
      lgSeq.push(i);
      return lgSeq;
    }
  }
}


function lgSequence1(arr){
    let sort = arr.sort((a, b) => a - b);
    let i = sort[0];
    let seq= [];
    let j = 0 
    while(i< sort.length){     
      let a =   sumOfNumber(sort[j])
      let b =   sumOfNumber(j+1);
      console.log(a, b);
      if(a===b){
        seq.push(sort[j])
      }
      else{
          return seq
      }
      j++;
      i++;
    }
}

function sumOfNumber(n){
    return n/2*(n+1);
}


let arr = [1, 2, 4, 19, 20, 3, 6];
console.log(lgSequence(arr));
console.log(lgSequence1(arr));


