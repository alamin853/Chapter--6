var num = [
    [78, 50, 79, 60],
    [80, 70, 75, 65],
    [90, 81, 76, 72]
]

// console.log(num[0][1])
// console.log(num[1][3])

for (let i = 0; i < num.length; i++) {
    const element = num[i]
    for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        console.log('element ' + i + " : " + element2)
    }
}