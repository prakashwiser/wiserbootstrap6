// Ternary Operator
var b = 3;
var data = "b is good data";
if (b>=3) {
    console.log('b is greated than 3');
} else {
    console.log('b is less than 3');
}
var one = (b == 3) ? data : "b is not 3";
console.log("ONE DATA:", one);

// var data = (a == 10) ? "a is 10" : "a is not 10";
// console.log("DATA: ", data);

// Spread Operator
var arrayData1 = ["sunday", "Monday", "Tuesday"];
var arrayData2 = ["Wednesday", "Thur", "Fri"];
var arrayData3 = ["Satur"];
var newArray = arrayData1.concat(arrayData2, arrayData3)
console.log(newArray);
var totalSpread = [arrayData1, arrayData2, arrayData3];
var totalSpreaded = [...arrayData1, ...arrayData2, ...arrayData3];
console.log("normal: ", totalSpread);
console.log("Spreaded: ", totalSpreaded);

// Arrow Function

function dharma(a, b) {
    return a*b
}
console.log(dharma(4,6));

var newArrowFunction = (a, b) => {
    var c = 5
    return a+b+c
}

console.log(newArrowFunction(2, 3));


var arr = [1, 2, 3]
let arr2 = [...arr]
arr2.push(4)
console.log(arr2);

var a2 = [1, 2, 3]
var aa2 = [...a2, 4, 5]
console.log(aa2);
