console.log("colors hex to rgb!");


// console.log(process.argv);

let arr = process.argv;

// console.log(process.argv[0]);
//
// console.log(process.argv[1]);


let input1 = arr[2];
let input2 = arr[3];
let input3 = arr[4];


let hexToRgb = function(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;

}

// for (i=2 , i<arr.length , i++){
//   process.argv[i];

console.log ("RGB result is: " + hexToRgb(input1));

console.log ("RGB result is: " + hexToRgb(input2));

console.log ("RGB result is: " + hexToRgb(input3));






// // here we're grabbing everything that's "exported" in our other file, and storing it a variable called 'my'
// const my = require('./module')
//
// // Variables and such that were not exported aren't in scope
// console.log("number is " + typeof number) // undefined
//
// // Anything exported can be accessed on the object
// console.log("Name is: ", my.name)
//
// // JavaScript is still JavaScript
// console.log("The array contains " + my.arr.length + " elements")
//
// // Let's see the module we imported
// console.log(my)
//
// console.log("end of index.js")
