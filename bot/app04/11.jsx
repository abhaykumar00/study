//     State-
//state is the value bw component which change with time 

import { useState } from "react"

//react not rerender but with state component this will re render 

//use function component with react hooks -(3 part of it)
/**
 * 1- state
 * 2-effect
 * 3-memoization
 */
//






//                                         useState

// simple example of useState
/***
 * function useState(initialValue){
 * function dispatch(){}
 * return [value,dispatch];}
 * 
 * const [count,setCount]=useState(0);
 * 
 * 
 */
/**
 * useState is a function and accept only one argument,which is initialvalue
 * its return a array,this array's fist value is the simple value
 * and the seecond value is always a function
 * its returna array which is destructured
 * 
 */


const App(){
   const [count,/*here put a function */ setCount ]= useState();

   const handleClck=()=>{
    setCount(count+1);
    //count store count+1;
    //after click on the button ,onclick=handlecount and then count is change and print count

   }
   return (
    <main>
        <h1>{count}</h1>
        <button onClick={handleClck}>Increment</button>
    </main>
   )
}
//render is meaninig we called App function .

//whenever a state of compponent is changed then React will re render.

const App=()=>{

    const [isSateOn,stateChange]=useState(false);
    function stateChange(){
        stateChange(!isSateOn);
    }
    return (
        <main>
            <h1>State : {isSateOn ? "on":"off"}</h1>
            <button onClick={stateChange}>Change</button>
        </main>
    )
}
//bubbling not understand ,add Event.stopPropagation //this stop bubbling  



