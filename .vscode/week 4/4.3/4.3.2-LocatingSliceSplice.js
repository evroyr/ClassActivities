const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("First Index of 'a':", firstIndexOfA);
console.log("First Index of 'b':", firstIndexOfB);
console.log("First Index of 'c':", firstIndexOfC);

// find the last index of "a", "b", and "c"
console.log("Last Index of 'a':", lastIndexOfA);
console.log("Last Index of 'b':", lastIndexOfB);
console.log("Last Index of 'c':", lastIndexOfC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while (firstIndexOfA !== lastIndexOfA) {
  arr.splice(lastIndexOfA, 1);

}

console.log("array after removing extra 'a':", arr);
