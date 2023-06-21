const Button=(props)=>{
    return <button>{props.label}</button>
};
// props-> {label:"click bro"}
export const App=()=>{
    return <main className="container">
        <Button label="click bro"/>
        <Button label="click me"/>
    </main>
}

//one another method
const Button=({label})=>{
    return <button>{label}</button>
}

//2nd one method 
export const App=()=>{
    return (
        <main>
            <button>
                hello 
                <p>hi</p>
            </button>
        </main>
    )
}
//jo bhi Button ke andar hai wo children me pass ho jayega

const Button=(props)=>{
    return <button>{props.children}</button>
}

/* o/p->
 hello 
 <p>hi</p>
*/
// directly {children} likh sakta hu
/**
 * ham <Button> ke andar aur kuch bhi pass kar sakte hai 
 * jaise <Button>
 * <h1>Hello</h1>
 * <Layout />
 * </Button>
 */

/***
 * props are immutable so we cannot change its value
 
<A>
<B>
<C city="bhadohi"></c>
</B>
</A>

*here const A have the children prop->
<B>
<C city="bhadohi"></c>
</B>




 */

// return children ,
//this is use only we return children
//if pass anything extra then use{}

//directly use scope.map if there's no jsx involve
//if we return mainy things then use () this bracket ,this is jsx
//component


const isSafe=true:
return <section>{isSafe && <h1>I am feeling secure!</h1>}</section>

//agr hame diff diff type ,class dena hai to -
// <section className=""
 //iss tarike se de sakte hai
 1:52
