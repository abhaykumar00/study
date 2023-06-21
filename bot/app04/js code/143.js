                        //Prototypes

//we can create a object and give a function ,a constant,etc
const person={}
person.name="abhay";
person.work=function(){
    console.log("");
}
//if I want to create a object same as person then I write again full code,this is not good so we try something other things

function Person(name,age){
    const person={};
    person.name=name;
    person.age=age;
    return person;
}
const p_1=Person(abhay,22);
console.log(p_1);
const p_2=Person(kumar,23);

//by this we can reuse but here we don't add the work function inside


//fn Instantaion with shared methods

const sharedMethod={
    work(){
        console.log(`${this.name} is working`);
    }
}
function person(){
 person.work=sharedMethod.work;
}
//here we use.work not .work() ,it means we call the whole function 

//work()==work:function(){} this is like this 



// Object.create()

const parent={
    name:"aabhay"
    ,age:21
}
const child=Object.create(parent);
//here if we call the child.name and if name is not available in the child then go to parent and call the parent.name automatically
/***
 * Object.create->two things
 * 1-create a new object
 * 2-Delegates failed lookups to parent
 */
//after creating child object with parent object , child object is empty
//only we create a link bw child and parent object

// if we give child.name="kk",then child store name as kk not parent name
//we can also create agrand parent object

//use another fn's methos -there are 3 technoque -
//1- sharedMethods.work.call(person);
//2- peron.work=sharedMethods.work;
//3- const person = Object.create(sharedMethods);

const person =Object.create(sharedMethods);


                //prototypes
//every function behave like a object ,like- person.work 
/***
 * if person in fn then -
 * person.prototype is an object
 * person.prototype.work = function(){
 * console.log(`${this.name}is working`));}
 * only fn have prototype property
 * 
 */

                        //constructor function
/***
 * const personOne=new Person("abhay",22);
 * if we remove return keyword from the person fn then it automatic return the name and age to personOne
 * 
 * 
 * const arr=new Array();
 * arr access all the methods from the Array
 * 
 */


/**
 * if I enter const arr=[1,2,3]
 * it means I create a object like this-
 * const arr=new Array();
 * because of this arr can access  all the methods of Array.prototypes
 * if somethis missing in arr then it search from the Array prototype;
 * like arr.lenght
 * then arr don't have the length method so serch by Array.prototype.length
 * 
 */

