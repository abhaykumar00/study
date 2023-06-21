/**
 * Execution context
 * call stack
 * Hosting
 * closures
 * Async js-promises,async/await,fetch
 * event loop
 * 
 */



/**
 const parent={
    id:1,
    name:"ak"
 }
 const child=Object.create(parent);
 console.log(child.score);
 console.log(child);

 //here parent object called the prototype of this child





 
 */
/*

const child={
    __proto__:parent,
};

const child={};
Object.setPrototypeOf(child,parent);

//we can set prototype by 3 methods

*/

const sayMixing={
    say(phrase){
        console.log(phrase);
    },
};
const sayHiMixing={
    __proto__:sayMixing,
    sayHi(){
        super.say('hello');//sayMixing.say();//super refere to proto of current object
    },
    sayBye(){
        super.say('hello');
    }
};
class User{
    constructor(name){
        this.name=name;
    }
}
const user=new User("Abhay Kumar");
//user->User.prototype
Object.assign(kiskoLenaHai,kaunDeRaha);

//if super is called in the 
(Object.assign(User.prototype,sayHiMixing));

//js- synchonous ,single threded language
//memory creation phase ,only create variable and function
  //purpose-Help js Engine to manage the complexity of excution context

  //Global Execution context
  //   














