function twoSum(arr, target) {
  let result={}
  for(let  [index, num] of  arr.entries()){
     if(result[num] !== undefined) return  [result[num], index];
     result[target-num] = index;
    
  }
  
}
console.log(twoSum([2, 3, 4,6, 9], 13));
