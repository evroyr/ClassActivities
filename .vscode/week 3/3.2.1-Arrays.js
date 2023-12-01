// create an Array using an Array literal
const luxerycars =["porsche", "corvette", "bugatti"];
// access the 1st item in the Array
console.log(luxerycars[0]);
// access the last item in the Array
console.log(luxerycars[2]);
// print the length of the Array
luxerycars.length
// use the length property to access the last item in the Array
console.log(luxerycars[luxerycars.length-1]);
// with for...of, loop over the Array, modify the value and add to a different Array
const modifiedcars = []

for(const car of luxerycars){
  const modifiedcar = car.toUpperCase(;);
  modifiedcar.push(modifiedcar);
}
console.log("modified array:", modifiedcars)
