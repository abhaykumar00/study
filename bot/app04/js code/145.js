function Person(name, age) {

    //behind the seen-
    //this=Object.create(Person.prototype);
    this.name = name;
    this.age = age;
    //return this;
}
const erin=new Person("Erin",24);
//here erin.work in not defined function
Person.prototype.work = function(){
    console.log("this is a work function in Person object")
}
//now erin.work in defined function
//console.dir();

const arr=[1,2,3];
//arr-> Object.create(Array.prototype)

arr.printAll();
Array.prototype.printAll = function(){
    for(const element of this)
    console.log(element);
}


//override also possible of prototype;
Array.prototype.map=function(){
    console.log("hahaha, overriden");
}

//inside map ,function is called callback function.
/**
Array.prototype.myMap=function(cb){
    const result=[];
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i]));
    }
    return result;
}
function callback(num){
    return this*2;
}
const arr=[1,2,3];
const newArr=arr.myMap(callback);



const newArray=arr.myMap((element)=>  element*3);
 */

//classes

class person{
    constructor(name,age){
        this.name=name;
    }
    work(){
        console.log(`${this.name} is sleeping`);
    }
}
//encapsulating every thing in the class
//protype is a object
//class is like as a function
//behind the seen class like as a function
//sum() behind the seen sum.call();//syntatic sugar -means look simple 
//class is look simpler than function ,class is sysnthic sugar of function

const miksha=new Person("mii",12);
miksha.work();



//execution context













