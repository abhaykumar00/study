/**
 * let arrOne=[1,2,3,4];
 * let arrTwo=[1,2,3,4,arrOne.push(9),...arrOne];
 * .push is give length as output
 * [1,2,3,4,5,1,2,3,4,9];
 */

/**
 * parent={
 * id:12,
 * city:"j"
 * }
 * const {}=parent; (this is object destructing)
 * const{ id,city,...rest}=parent;
 * //rest operator destruct all key
 */
//react do maximum validation on fronted so backend does not have data load
// const [formErrors,setFormErrors]=useState(
//     firstNameError="",
//     secondNameError="",
//     emailError="",
// )
// const submit=()=>{
    // const {firstName,secondName,email}=formDeatils; //destructing
    // if(firstName.length<3){
    //     setFormErrors({
    //         ...formErrors,
    //         firstNameError:"First name atleast 3 charector"
    //     })
        
    //     
    // }
    //if(secondName.length<3){
    //     setFormErrors({
    //         ...formErrors,
    //         firstNameError:"second name atleast 3 charector"
    //     })
    ///////but here we only got the one error because if(firstName )have error and then second name also have erro the
    //////...form not save ones data
        
    //     
    // }

//2nd method
// const {firstName,secondName,email}=formDeatils;
// const firstNameError=firstName.length<3 && "First Name shoud be 3 length";
// const secondNameError=secondName.length<3 && "First Name shoud be 3 length";
// const emailError=email.length<3 && "First Name shoud be 3 length";
// if(firstNameError||secondNameError||emailError){
//     setFormErrors({
//         firstNameError, //it means firstNameError:firstNameError
//         secondNameError,
//         emailError
//     });
// }

// }








//setCount(count+1)!==setCount(b);
//b=count+1;
//

/***
 * lazy State Initialization
 */

