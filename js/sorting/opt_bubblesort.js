function optBubbleSort(arr) {  
  for (let i=1; i<arr.length; i++) {
    for (let j=arr.length-1; j>=i; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      }
      console.log(i, " - ", j, "=>", arr)
    }
  }
  return arr
}

arr = [5, 3, 8, 2, 1, 4]

console.log(optBubbleSort(arr))