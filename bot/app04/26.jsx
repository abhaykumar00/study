const App=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("count value in effect",count)

    })
    return (
        <main>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </main>
    )
}
/******************************************************* */
import React, { useEffect, useState } from 'react'


function Child({count}){
  useEffect(()=>{
    console.log("the count is",count);
    return ()=>{
      console.log("cleanup",count);
    }
    //only new useeffect come then cleanup run 

  },[count]);
  return <h1>Count:{count}</h1>;

}

function App() {
  const [count,setCount]=useState(0);
 //cleanup run at 2 state-
 //1st-before runnig a new state
 //2nd-unmount

 //in every single render every single hook run same number of time


 //cant use another hooks inside any hooks/*
 /**
  * Example
  * function MouseTracker(){
  * useEffect(()=>{
  * const [mousePosition,setMousePosition] =useState({
  * x:0,
  * y:0,})})
  * 
  * this is wrong
  */
 /**
  * right is--
  * 
  * const [mousePosition,setMousePosition] =useState({
  * x:0,
  * y:0,});
  * function MouseTracker(){
  * useEffect(()=>{
  * setMousePosition(x:changed,y:changed)
  * })
  * 
  */

  return (
    <main>
      
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <hr />
      {count%3==0 &&<Child count={count} />}

      
    </main>
  )
}


export default App;

/*************************************************************** */
/*** 29 may */


import React, { useEffect, useState } from "react";





/**
 * 1. Changing title of the page
 * 2. Make API calls
 * 3. Timer and Intervals
 * 4.Event Listener
 */

 const App=()=>{
    const [useData,setUserData]=useState(null);
    useEffect(()=>{
    async function getUserData(){
      const response =await  fetch("https://jsonplaceholder.typicode.com/todos/1")
       const data=await response.json();
       /**
        * .then((response)=>{
            return response.json() }).then((data)=>{
                setUserData(data);
            });
        */
    }
    getUserData();


    /**
     * if we need to call a function after immidiate the declaration of the function the use this-
     * (function (){
     * console.log("welcome");})();
     */
},[]);
    return (
        <main>
            <h1>Fetching user Data</h1>
        </main>
    );
};
export default App;

//we use useEffect for api call because if we dont use this then in every render it call the api again and again
//undefined.method give error
//user.id?.name
/**
 * iff user.id is undefined then return undefined else return user.id.name
 * const message=user?.id?.city?.location ||"hey"
 * 
 */



/*********************************************************************************** */

//30 may

import React,{ useEffect,useState } from "react"

 const App=()=>{
    const [user,setUser]=useState([]);
    // const [loading,setLoading]=useState(false);
    useEffect( ()=>{
        
        (async function (){
            //setLoading(true);
         try{
            const response=await fetch('https');
            if(!response.ok){
                throw new Error(`API faild status:${response.status}`);
                //it is like this-- {message:Api faild status:${response.status}
            }
            //this part is not run if response is false

            const data=await response.json();
            setLoading(false);
            setUser(data);
            console.log(response);
         }
         catch(e){
            console.log(e.message);
            setLoading(false);
         }
         finally{
            setState({...StaticRange,loading:false});
         }
         //state updates Batching
         //multiple useState in on state
    },[]);
    if(loading)
    return <Loader />;
   
    if(user.length===0)
    return <h1>No user in the system</h1>

    return <main>
        {user.map((user)=>(<h3>{user.email}</h3>))}
    </main>

}
export default App;



//const [state,setState]=useState((
//     loading:false,
//     user:[],
//     error:""
// ))
//we can also use like this
//setState({...state,loading:true})




/**
 * State Batching
 * const App=()=>{
 * const [name,setnaame]=useState("");
 * const [city,setCity]=useState("")
 * }
 */

// if we have diff-2 rerender the page render more time so we use Batching
//

/**
 * setCout(count+1)
 * setCount(count+1)
 * setCount(count+1)

only 3rs line run ,because same expression run only once

*/



//we use callback function in api call
//setCount((prevState)=>{
//    return prevState+1;
// })



/**
 * API call is done by the two method-
 * 1- useEffect
 * 2-Event (onClick,onChange,etc.)
 */

/**************************************************************************  */
//31may
import React,{useState} from "react";

const App=()=>{
   const [todo,setTodo]=useState({});
   async function getTodo(){
      const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data=await response.json();
      setTodo(data);

   }



   return (
      <main>
         <h1>{todo.title && todo.title}</h1>
         <button onClick={getTodo} >Fetch and show Data</button>
      </main>
   )
}
export default App;
//for API call must use two things -1-LOader,2-error handling
//literal means what value present inside it
//ex-array literal,objectLiteral, string literal



//1 june
//Build timer

const { useEffect } = require("react");

const timerId = setInterval(() => {
  console.log("Timer going");

}, 1000);

setTimeout(() => {
  clearInterval(timerId);
})
const setTimeId=setTimeout(()=>{
  console.log("FUnction called");
},3000);
clearTimeout(setTimeId);
//setInterval run every given time
//setTimeout run only once after give time ,only ones in whole programm
//clearInterval.clearTimeout are  pre defined

const app(){
  const [count,setCount]=useState(10);
  //intial value of this count is 10

  useEffect(() => {
    setInterval(() =>{
      //here count value is 10 and this useeffect not run in every render
      //but setInterval run every 1000ms
      //but every time count=10
      setCount(count-1);
      //here 
    },1000)
  },[]); 
  //if react got same value as previous then it stop running (ex- setInterval)
}

/*********************************************************************** */

//here we apply differernt condition
setInterval((){
setCount((prevState)=>prevState-1)
});
//now its running good
 


/************************************************* */


let intervalId;
const App=()=>{
  const [countDown,setCountDown]=useState(10);

  useEffect(()=>{
    intervalId=setInterval(()=>{
      setCountDown(prevState=>prevState-1);
  })
})
if(countDown===0)
clearInterval(intervalId);
return (
  <main>
    <h3>countDown:{countDown}</h3>
  </main>
);
 //we can alos run by setTimeOut

 useEffect(()=>{
  setTimeout(()=>{
    setCountDown(prevState=>prevState-1);
  })
 },[countDown]); 

 const stop = ()=>{
  clearInterval(intervalId);
 }
 const reset = ()=>{
  stop();
  setCountDown(0);
 }

 /*----------------------------------------------------------------
 */

 useEffect(()=>{
  const [countDown, count]=useState(0);
  const [enable,setEnable]=useState(false);
  useEffect(()=>{
    if(enable) {
      const intervalId = setInterval(() =>{
        setCountDown(countDown=>countDown+1);
      },1000)
      return ()=>{ 
        clearInterval(intervalId);
        //when enable value is changed then return is run as unmounting function 

      }
  }
 },[enable])

  



 //Build timer

const { useEffect } = require("react");

const timerId = setInterval(() => {
  console.log("Timer going");

}, 1000);

setTimeout(() => {
  clearInterval(timerId);
})
const setTimeId=setTimeout(()=>{
  console.log("FUnction called");
},3000);
clearTimeout(setTimeId);
//setInterval run every given time
//setTimeout run only once after give time ,only ones in whole programm
//clearInterval.clearTimeout are  pre defined

const app(){
  const [count,setCount]=useState(10);
  //intial value of this count is 10

  useEffect(() => {
    setInterval(() =>{
      //here count value is 10 and this useeffect not run in every render
      //but setInterval run every 1000ms
      //but every time count=10
      setCount(count-1);
      //here 
    },1000)
  },[]); 
  //if react got same value as previous then it stop running (ex- setInterval)
}

/*********************************************************************** */

//here we apply differernt condition
setInterval((){
setCount((prevState)=>prevState-1)
});
//now its running good
 


/************************************************* */


let intervalId;
const App=()=>{
  const [countDown,setCountDown]=useState(10);

  useEffect(()=>{
    intervalId=setInterval(()=>{
      setCountDown(prevState=>prevState-1);
  })
})
if(countDown===0)
clearInterval(intervalId);
return (
  <main>
    <h3>countDown:{countDown}</h3>
  </main>
);
 //we can alos run by setTimeOut

 useEffect(()=>{
  setTimeout(()=>{
    setCountDown(prevState=>prevState-1);
  })
 },[countDown]); 

 const stop = ()=>{
  clearInterval(intervalId);
 }
 const reset = ()=>{
  stop();
  setCountDown(0);
 }

 /*----------------------------------------------------------------
 */

 useEffect(()=>{
  const [countDown, count]=useState(0);
  const [enable,setEnable]=useState(false);
  useEffect(()=>{
    if(enable) {
      const intervalId = setInterval(() =>{
        setCountDown(countDown=>countDown+1);
      },1000)
      return ()=>{ 
        clearInterval(intervalId);
        //when enable value is changed then return is run as unmounting function 

      }
  }
 },[enable])

  

 /*********************************** */
 //6june


 
import React, { Component } from 'react';
import {useRef,useState} from 'react';


const App=()=>{
   const inref=useRef();
   const [count,setCount]=useState();
   console.log(inref)
 

  return (
    <main>
      <input ref={inref} id="7"></input>
      <button onClick={setCount(prev )}>Button</button>
      
    </main>  
  )  
}
export default App;
//useref create a object with current properties
//hooks cannot use in class componenets
const ComponentA=(props)=>
{
  const {username}=props;
  return (
    <div>
      <h3>Component A</h3>
      <componetB {...props}/>
      {/* abouve means we pass full props object */}

    </div>
  )
}

const App=()=>{
  const username="Osckar";
  return (
    <ComponentA username={username} />  )  
}


<name.Provider 
1:38
/************************************************************************* */

//8 june
import React from 'react';
import { Component } from 'react';
//super call parent constructor function

class App extends Component{
    constructor(props){
         super(props); 
         this.username="Abhay";
         this.state={
             count:1,
         }
    }
    
    handleClick=()=>{ 
        this.setState( {
            count:this.state.count+1, 
        }, 
        ()=>{
            //this is 2nd function to run   
            //memo check change in props
        })

    }
    render(){

    return <main>
        <h1>Hi:{this.username}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Button</button>
        </main>;  
    //hooks never use in class components 
    

    }
}

export default App;


/********************************************************* */
8june import React from 'react';
import { Component } from 'react';
//super call parent constructor function

class App extends Component{
    constructor(props){
         super(props); 
         this.username="Abhay";
         this.state={
             count:1,
         }
    }
    
    handleClick=()=>{ 
        this.setState( {
            count:this.state.count+1, 
        }, 
        ()=>{
            //this is 2nd function to run   
            //memo check change in props
        })

    }
    render(){

    return <main>
        <h1>Hi:{this.username}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Button</button>
        </main>;  
    //hooks never use in class components 
    

    }
}

export default App;
 

 


