function bubbleSort(arr) {
    while(true) {
        let trocou = false
        for (let i=arr.length-1; i>0; i--) {
            if (arr[i] < arr[i -1]) {
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
                trocou = true
            }
            console.log(i, "=>", arr)
        }
        if (!trocou) break;
    }
    return arr
}

arr = [5, 3, 8, 2, 1, 4]

console.log(bubbleSort(arr))