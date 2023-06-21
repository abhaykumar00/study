// // const Avatar({ src, height, width }){
// //     return <img src={src} height={height} width={width} className="avatar" />

// // }
// // export const App = () => {
// //     return (<div>
// //         <Avatar src="www.com"
// //             height={100}
// //             width={50} />
// //     </div>)
// // }
// const Avatar=(props)=>{
//     const imgae=props;
//     const {src,height,width}=image;
//     return <img src={src} height={height} width={width} className="avtar"/> ;
// };
// <Avatar image={ {src:"hello",height:100,width:50}
// }/>
// const {image:(height,width,src)}
// const Avatar=(imgae:(height,width,src))

// //if there in inside other object then we give ex of image ;
// React uses composition ,to create small things and join them to create large ones


(size,src){
    Sizess={m:50,l:100};
    height=Sizess.size;
    widht=Sizess.size;
}


//map is return an array of same size

export const App=()=>{
    const liItems=[<li>One</li>,
                        <li>Two</li>];
    return (
        <main>
            <ul>
                {liItems}
            </ul>
        </main>
    )
}

export const App=()=>{
    const items=["Nike","Adidas","Puma"];


    //return like this--
    //<li>Nike</li>
    //<li>Adiddas</li>
    // M-1
    //create the result array
    const result=[];
    for(const item of items){
        result.push(<li>{item}</li>);
    }
    //M-2
    //create a result array

    const result=[];
    items.forEach((item)=>{
        result.push(<li>{item}</li>);
    })

    //M-3
    // do by map
   const result= items.map((item) =>{
        return<li>{item}</li>;
    })
//for loops are expression and map also 
    return (
        <main>
            <ul>
                {result}
            </ul>
        </main>
    );

};
const App()={
    const phones=[
        {name:"Iphone", rating:4.7},
        {name:"MI", rating:7}
    ];
    return (
        <div>
        {phones}.map((phone)=>{
            <div className="container">
            <h4>{phones.name}</h4>
            <p>{phones.rating}</p>
            </div>
        })
    )
}




