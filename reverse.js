var num = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < num.length / 2; i++) {
    var temp = num[i];
    num[i] = num[num.length - 1 - i]
    num[num.length - 1 - i] = temp
}
console.log(num)

var name = 'my name is alamin bhuiyan'
var reverse = ''

for (let i = 0; i < name.length; i++) {
    const nam = name[i];
    reverse = nam + reverse
}
console.log(reverse)
