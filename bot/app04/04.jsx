//we can import css code here and after this my return value are pre css designed
//import app.css
//filter - filter the element and return new element


const students=[{
    id:4,name:'abhay',score:90

},{ id:5,name:'kk',score:99

}];

return <main>{students.map((student)=>{
    <div>
        <h3>{student.name}</h3>
        <h4>{ student.score  }</h4>
    </div>
})}
   
</main>





////////

const array=[1,2,3];
array.map((a)=>'hey');
//o/p console.log(array);-['hey', 'hey', 'hey'];

export const App=()=>{
    const phones=['iphone', 'android', 'jelly'];
    const Phoeseeee=[<h1>iphone</h1>,<h1>android</h1>];

    return <main>{phones}</main> //o/p- iphone android jelly
    return <main>{Phoeseeee}</main> //op= <h1>iphone</h1> <h1>android</h1> ..

}
//map is expressio ,for loop ,for each not a expressions.


//question -
const arr=[10,20,30,40,50,60,];

console.log(arr.map(a=>{if (a<30)
return <div><h4>Score:{a}</h4>
<h3>Result:fail</h3></div>
else
return <div><h4>Score:{a}</h4>
<h3>Result:pass</h3></div>
}));



// I can also use switch case
switch (a){
    case 0:
        return <h1>hey</h1>;
    case 1:
        return <h1>hey</h1>;
}

const mappind={
    iphoen:<h5></h5>,
    vivo:<div><h1></h1></div>
}
return (
<main>
    phones.map(phone =>{
            return mappind[phone.name];
    })
</main>
);


//children
 const Button=(props)=>{
    return <button>{props.children}</button>;
 };
 export const App=()=>{
    return (
        <main className="container">
            <Button>Click me</Button>
        </main> //agar upar wala click me button me show karna hai to click me as a child work
        //karega aur use ham .children se access kar sakte hai .it is like innerHTML.
        //props is always a object .
        //children property always avalible and it is undefined if children not available.

    );
 };


















