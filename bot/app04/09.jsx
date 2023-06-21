//on click ke nadar funcion pass karte hai ki click karne par kaun sa fn call hoga
// only pass the function in {} not in ""
//only pass callback function in {} not anything other
//agr ham App() ko call karenge aur return me kuch nahi hai to its give undefined
//isliye ham kewal App call karenge .
//onClick ={App}
//not onClick={App()}
//we can call onclick multiple time for diff function in same button or div or anything
//named export->
//export {App}


const App=()=>{

    return (
        <div >
            <a onClick={handleAnchorClick}>Google</a>
            <div onClick={handleDivClick}></div>
        </div>
    )
};

const handleAnchorClick=()=>{

}


//................................................................//
//using js ,you 1st grab the button element and register eventlistener
//we run the callback when the button is clicked this is called 'onClick={functoin}'

//jab direcltly onclick me function create karte hai to use ananomus fn kahte hai

const App(){
    //onClick always required callback function
    return <button onclick={functionName}>click here</button>

}
const button=document.querySelector('button');
button.addEventListener('click', ()=>{

})
-43:22
