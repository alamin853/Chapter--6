var num = [4, 6, 2, 9, 5];
var nums = [2, 9, 4, 6];

console.log(num.join(', '))

console.log(num.fill(0))

var number = num.concat(nums);
console.log(number)

console.log(Array.isArray(num))

var a = [1, 2];
var b = Array.from(a)

b[0] = 5

console.log(a)
console.log(b)
