a = 10;

// if (a==10) {
//     console.log("a is 10");
// } else {
//     console.log('a is not 10');
// }

// Ternary Operator
var b = 3;
var data = "no data";
var one = b == 3 ? data : "no";
console.log("ONE DATA:", one);

var data = a == 10 ? "a is 10" : "a is not 10";
console.log("DATA: ", data);

// Spread Operator
var arrayData1 = ["sunday", "Monday", "Tuesday"];
var arrayData2 = ["Wednesday", "Thur", "Fri"];
var arrayData3 = ["Satur"];
var totalSpread = [arrayData1, arrayData2, arrayData3];
var totalSpreaded = [...arrayData1, ...arrayData2, ...arrayData3];
console.log("normal: ", totalSpread);
console.log("Spreaded: ", totalSpreaded);
function abcd(a, b) {
  return a + b;
}
console.log(abcd(1, 2));
// arrow function
const gef = (x, y, z) => {
  var data = 5;
  return x + y + z + data;
};
console.log(gef(10, 20, 30));
// map function
var mapData = [1, 2, 3];
var result = mapData.map((a) => a * 2);
console.log("mapdata multification 1 2 3",result);
// filter
const datas = [1000, 2000, 3000, 4000, 5000];
const resultt = datas.filter((a) => a > 50).sort();
console.log("filterdatas", resultt);
// Pass a function to map
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x / 2);
console.log(map1);

var a = [2, 4, 6, 8];
var b = a.map((a) => a * 3);
console.log(b);

var a = [10, 20, 30, 40, 50, 45, 100];
var b = a.filter((a) => a > 20).sort();
console.log(b);
