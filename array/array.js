// Creating arrays
cons.tprint('1- Creating arrays', true);
var arr1 = [];
cons.print('Empty array [] length: ' + arr1.length, true); // displays 0

var arr2 = [1,2,3,4,5,6,7];
cons.print('Array declared as [1,2,3,4,5,6,7].length: ' + arr2.length, true); // displays 7
cons.print('Array declared as [1,2,3,4,5,6,7] values: ' + arr2, true); // displays []

var arr3 = new Array(1,2,3,4,5); 
cons.print('new Array(1,2,3,4,5) length: ' + arr3.length, true); // displays 5

var arr4 = new Array(5);
cons.print('new Array(5) length: ' + arr4.length, true); // displays 5
cons.print('new Array(5) values: ' + arr4, true); // displays ,,,,

//Verify if object is an array
cons.tprint("2- Verify if object is an array", true);
cons.print("verifying arr3 is an array with Array.isArray(arr3): " + Array.isArray(arr3), true);

// Creating arrays from strings
cons.tprint('3- Creating arrays from stings with .split()', true);
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
cons.print('String: ' + sentence, true);
for (var i = 0; i < words.length; ++i) {
    cons.print("word " + i + ": " + words[i], true);
}

// Array Accessor functions
cons.tprint('4- Array accessor functions: .indexOf(), .lastIndexOf()', true);
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Cynthia"];
cons.print('With names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Cynthia"]', true);
cons.print('names.indexOf(\'Clayton\') is equal to: ' + names.indexOf('Clayton'), true);
cons.print('names[3] is equal to: ' + names[3], true);
cons.print('names.lastIndexOf("Cynthia") is equal to: ' + names.lastIndexOf("Cynthia"), true);
cons.print('names[5] is equal to: ' + names[5], true);


// Array Mutator Functions
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
cons.tprint('5- Array Mutator functions: .push(), .pop(), .shift(), .unshift(), .splice(), .reverse(), .sort()', true);
names.push("Richard")
cons.print('names.push("Richard") is equal to: ' + names.toString(), true);
names.unshift("Carmel");
cons.print('names.unshift("Carmel") is equal to: ' + names.toString(), true);
names.pop();
cons.print('names.pop() is equal to: ' + names.toString(), true);
names.shift();
cons.print('names.shift() is equal to: ' + names.toString(), true);

nums.splice(3,0,newElements);
cons.print('Given nums = [1,2,3,7,8,9] and newElements = [4,5,6], nums.splice(3,0,newElements) is equal to: ' + nums.toString(), true);

nums.reverse();
cons.print('Given nums, nums.reverse() is equal to: ' + nums.toString(), true);

names.pop()
names.sort();
cons.print('Given names, names.sort() is equal to: ' + names.toString(), true);


var name = "Clayton";
var position = names.indexOf(name);
if (position >= 0) {
    console.log("Found " + name + " at position " + position);
} else {
    console.log(name + " not found in array.");
}