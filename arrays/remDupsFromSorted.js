// Remove duplicates from *sorted* array, leave duplicate items as null

function removeDups(arr) {
  // Assuming arr has atleast one element
  let availableIdx = 1
  let last
  for ( let i=1; i < arr.length; i++) {
    if (arr[i] === arr[availableIdx-1]) {
      arr[i] = null
    } else {
      arr[availableIdx] = arr[i]
      availableIdx++
      arr[i] = null
    }
  }

  return arr
}

console.log(removeDups([10, 10, 10, 10]))
console.log(removeDups([10, 10, 10, 10, 20, 20, 30, 40, 50, 50]))