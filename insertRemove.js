var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr[3] = 9
// arr.push(9)
// arr.unshift(9)
arr.splice(3, 0, 9, 10)
console.log(arr)

// arr[3] = undefined
// arr.pop()
// arr.shift()
arr.splice(3, 3, 20)
console.log(arr)