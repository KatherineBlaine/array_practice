var pets = ["dog", "cat", "fish", "snake"]
var ages = [10, 15, 3, 12]
var areNice = [true, true, true, false]


// The pop array method will remove the last element of the array. 
// The command pets.pop() will remove "snake" from the pets array.
pets.pop();

console.log(pets);

// The slice array method will log into the console a certain portion
// of the array indicated. Within the parentheses following the slice
// command you can indicate the range of elements you want to pring.
// This command will print the values between element 1 and element 3,
// which will yield '[15,3]' in my console.
console.log(ages.slice(1, 3));

// The shift array method will remove the first element of the indicated
// array. The following line of code will remove the first element of
// the areNice array.
areNice.shift()

console.log(areNice)


// Index Positions:

// Index positions define the position of each value in an array. 
// Index positions count up from 0.
// In the array : var ages = [12, 15, 25, 44]

// The value 12 is in index position 0
// The value 15 is in index position 1
// The value 25 is in index position 2
// The value 44 is in index position 3

// You can access certain index positions within an array by indicating
// the array name followed by the index position number in brackets.

// For example, in the array example used previously, the following line of
// code would refer to the value in index position 1, or '12':
// ages[0]
// Running 'console.log(ages[0])' would print the value of index position
// 0 of the ages array to the console.