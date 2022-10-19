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
