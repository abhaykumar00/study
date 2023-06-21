/**
 * Global excution context
 *  
 */
//Hoisting 
/**
 * engine reserve memory for every function and every variable called hoisting 
 * the mechanism to store space for variable and function during memory creation is called hoisting
 *   
 */
const a="a";
const b="aa";
//in the hoisting ,variable are store as undefinerd value and function are define as whole body


greet();
function greet(){
    console.log("hey");
}
//its working and output is hey


console.log(aaa);
var aaa=4; 
//output is undefined because hoisting create valriable named aaa and the execution 
//period it give undefined value


//const and let variable connot access before the intialization
//its rule by js community ,hoisting is done but not run these function
//code execution phase
//golbal execution context
//function execution context
//var is window object
//scope chain
//web socket ,server sent events,long polling
 //call stack
 /**
  *   1st call main();
  *   this is anamous  
  */
//main duty of callstack
//stack overflow -max we call 10-15 function


 
