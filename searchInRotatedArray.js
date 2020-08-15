function searchInRotatedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right )/ 2);
    if (arr[mid] === target) return mid;
    if (arr[left] <= arr[mid]) {
      if (target <= arr[mid] && arr[left]<= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= num[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

console.log(searchInRotatedArray([4,5, 6, 7, 0, 1, 2, 3], 0));

