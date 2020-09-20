// function LinkList (){
//     console.log("linklist ")
// }



function abc(arr) {
  let data = arr.sort((a, b) => b - a);
  let res = [];
  let j = data.length-1;
  for (let i = 0; i < data.length; i++) {
      console.log(i,j)
      if(i<j){

          res.push(data[i]);
          res.push(data[j]);
      }
      j--;
    
  }
  console.log(res)
  return res;
}

abc([7,5,2,7,8,-2,25,25]);
