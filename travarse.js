var arr = [4, 5, 7, 9, 10, 8, 3, 10];
for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    arr[i] = arr[i] + 2
}
console.log(arr)

var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i]
}
console.log(sum)

var number = [1, 2, 3, 4, 5, 6, 7];
for(var i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        console.log('even number' + number[i])
    }
    else{
        console.log('odd number' + number[i])
    }
}

