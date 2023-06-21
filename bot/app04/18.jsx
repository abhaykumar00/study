//arr.push(3);
//this return the length of the array after putting the value


/**
 * const input1=[1,2,3,4];
 * const input2=[...input1,input1.push(7),...input1]
 * //input1.push(7) return the length 5
 * output is [1,2,3,4,5,1,2,3,4,7];
 */
//you cannot change or modify state directly


const App=()=>{

    const [formDetails,setFormDetails]=useState({
        firstName:"",
        secondName:"",
        email:""
    });

    const handleForm=(event)=>{
        const field=event.target.name;
        const name=event.target.value;
        // const newFOrmDetails={firstName:value,secondName:field};
        // setForm(newFOrmDetails);

        //1-st method
        // let newFOrmDetails={};
        // if(field==="firstName"){
        //     newFOrmDetails={
        //         ...formDetails,
        //         firstName:name
        //     }
        // }
        // else if(field==="secondName"){
        //     newFOrmDetails={
        //         ...formDetails,
        //         secondName:name
        //     }
        // }
        // else if(field==="email"){
        //     newFOrmDetails={
        //         ...formDetails,
        //         email:name
        //     }
        // }
        // setFormDetails(newFOrmDetails);

        //2nd Method

        const newFOrmDetails={
            ...formDetails,
            [field]:value,
            //if i directly write field then key is 'field
            //not its value.        }

    };

    //bydefalt value is true.

    /** whatever you adda prop without giving it any value
     * considerd as having avalue of true
     * this works for componenta and html elements as well
     */
    

    const validate=formDetails.firstName.length>2 && formDetails.secondName.length>2 &&
    formDetails.email.length>2;


    return(
        <div>
            <label>
                First Name
            </label>
            <input onChange={handleForm} value={formDetails.firstName} placeholder="Cena"
            type="text" name="firstName" ></input>

            <button disabled={!validate}></button>
        </div>
    )

}

