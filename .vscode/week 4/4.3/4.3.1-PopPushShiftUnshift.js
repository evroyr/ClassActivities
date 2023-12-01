const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const poppedItem1 = nums.pop();
const poppedItem2 = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable
const shiftedItem1 = nums.shift();
const shiftedItem2 = nums.shift();


// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(shiftedItem1, shiftedItem2);
nums.push(poppedItem2, poppedItem1);
