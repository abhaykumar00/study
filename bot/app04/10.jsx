import { Children } from "react";

const app=()=>{
    const handleChange=(event)=>{
        //I want input.value then
        //event.target.value ->input.value
        console.log(event.target.value);
    };
    const handleFocus=()=>{
        cpnsole.log("Element on fucus");
    }
    return (
        <main>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input onChange={handleChange} onFocus={handleFocus}
                onBlur={HandleBlur} id="firstName" type="text" />
            </form>
        </main>
    )
}
//when I click on the input then this is called onFocus
//when I click on the input and after this I click anuwhere then this is called onBlur
//focus is only for input fields

const AlertButton=({children,message,onClick})=>{
    //here onclick means handleclick function
    
    return <button onClick={()=>{
        onClick();
        //this onclick is prop 
    }}>{children}</button>
}

const App=()=>{
  return (<main>  <AlertButton onClick={handleClick} message="hi">Play Movie</AlertButton> </main>);
}
/**
 * I can give like this
 * <main onClick={}>
 * <button>1</button>
 * <button>2</button>
 * <button>3</button>
 * </main>
 * 
 * onclick access anybutton is clicked
 * if I put onclick={(event)=>{
 * console.log(event.target.innerText)}}
 * 
 * then when button 1 is called then print 1 
 * or----
 * switch (event.target.textContent){
 * case 1:
 * console.log("casual click")
 * return ;}
 */
//////////////////////////////////////////////////////////////////


<form onSubmit={(event)=>{
    event.preventDefault();
}}>

</form>
/**
 * if we dont have the prevent default then when we click on the button then page is refreshed but after use pre defined mtheod preventDefault will
 * 
 */
return (<main>
    <select onChange={(event)=>{
        console.log(event.target.value);
    }}>
        
  <option value="spid1">Spider 1</option>          
<option value="spid2">Spider 2</option>
<option value="spid3">Spider 3</option>

    </select>
</main>);
//here when I select the option the onchange store its 'value'

















