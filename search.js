var arr = [10, 12, 25, 20, 14, 18];
var find = 15;
var isFound = false

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == find){
        console.log("Data Found at Index " + i)
        isFound = true
        break
    }
}
if(!isFound){
    console.log("Data Not Found")
}