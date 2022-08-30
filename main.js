//1// call
var obj ={
    num:2
};

var addToThis =function(a,b,c){
    return this.num+a+b+c;
};

//console.log(addToThis.call(obj,5,6,7)); 

//2// apply
var arr=[5,6,7];

//console.log(addToThis.apply(obj,arr));
var obj2={num:8};
//console.log(addToThis.apply(obj2,arr));

//3// bind
var bound = addToThis.bind(obj);

//console.log(bound);
//console.log(bound(1,2,3));

//4//
let Student={
    age:20
}
function printAge(){
    console.log('Student age is '+this.age);
}
// using call
printAge.call(Student);
// using bind
let printStudnetAge=printAge.bind(Student);
printStudnetAge();


//1// currying

// currying using bind method
let multiply=function(x,y){
    console.log(x*y);
}

let multiplyBytwo=multiply.bind(this,2);
multiplyBytwo(4);

// let multiplyByThree=multiply.bind(this,3,4);
// multiplyByThree(6);

let multiplyByThree=multiply.bind(this,3);
multiplyByThree(6);


// currying using closure
function add(x){
    return function(y){
        console.log(x+y);
    }
}

let addByTwo=add(2);
addByTwo(6);

let addByThree=add(3);
addByThree(8);