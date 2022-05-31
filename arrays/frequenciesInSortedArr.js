function printFreq(arr) {
  let freq = 1
  let lastEl = arr[0]
  for (let i=1; i<arr.length; i++) {
    if (arr[i] === lastEl) {
      freq++
    } else {
      console.log(lastEl, ' ', freq)
      lastEl = arr[i]
      freq = 1
    }
  }
  console.log(lastEl, ' ', freq)
}

printFreq([1])