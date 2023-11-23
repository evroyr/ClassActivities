// Named Parameters
param1:30 param2:40
// write a function that takes two named parameters:
myNumberFunction({param1:30, param2:40})
// print each named parameter,

// then return the parameters added together
function functionwithtwoparams(param1,param2){
  console.log(param1,param2)
  return a + b
}
// invoke the function and pass in two numbers
functionwithtwoparams(1,2);

// invoke the function and pass in more than two numbers
functionwithtwoparams(1,2,3,4);
// invoke the function and pass in only one number
console.log(functionwithtwoparams(14));
// change the function to set default values for the parameters
function functionwithtwoparams(param1,param2){
  console.log(param1,param2);
  return a + b;
}
console.log("without arguments: " + functionwithtwodefaultparams());
console.log("with arguments: ")


// again, invoke the function and pass in only one number
function functionwithrestparm(a,b, ...c) {
  console.log(a, b);
  console.log(c);
  return a + b;
}
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
let value = functionwithrestparm(1, 2, 3, 4, 5);
console.log(value);
