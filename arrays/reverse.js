// Reverse an arry, use same array

function reverse(arr) {
  let low = 0
  let high = arr.length - 1
  while (low < high) {
    const temp = arr[low]
    arr[low] = arr[high]
    arr[high] = temp
    low++
    high--
  }

  return arr
}

console.log(reverse([5,3,65,12,-4,56,34]))

// time complexity - O(n)
// space complexity - O(1)