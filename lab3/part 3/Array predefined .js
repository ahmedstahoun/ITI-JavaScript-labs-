const array1 = [8, 13, 1, 50, 111];
const array2 = ["g", "x", "y"];

//1) .flat takes an integer value and returns the item at that index
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]


//2) .join  method creates and returns a new string by concatenating all of the elements in an array
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

//console.log(elements.join(''));
// Expected output: "FireAirWater"

//console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"



//3) .isArray determines whether the passed value is an Array
console.log(Array.isArray(array1));

//4) .find returns the first element in the provided array that satisfies the provided testing function
console.log(array1.find((element) => element > 10));

//5) .unshift adds one or more elements to the beginning of an array
console.log(array1.unshift(4, 5));

//6) .sort sorts the elements of an array
console.log(array1.sort());

//7) .shift removes the first element from an array
console.log(array1.shift());

//8) .push adds one or more elements to the end of an array
console.log(array1.push(88));

//9) .op  removes the last element from an array
console.log(array1.pop());

//10) .toString returns a string representing the specified array and its elements
console.log(array1.toString());