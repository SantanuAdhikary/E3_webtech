// !  how to declare function 


// !  1. Named Function 

function add(a,b)
{

    console.log("I am add function")
    console.log(a + b)
}

add(10,90)
add(33,44)


// ! function with return statement 


function sub(a,b)
{

    return a - b
}

let res1 = sub(20,5)

console.log(res1)


// !  function with expression 


let multiply =  function(a,b)
{
    console.log("i am one function....")
    console.log(a * b)
}

multiply(50,5)


// !  arrow function 


let division = (a,b)=>
{
  console.log(a / b)
}

division(10,5)



// !  nested function 

let outer = ()=>{

 console.log("I am outer function ")


   let inner =()=>{
     console.log(" i am inner function")
   }
   inner()

}

outer()


// ! Lexical scopping 

// in nested function inner function can access all the properties of outer function but the outer function can't access the property of inner function , this is called Lexical Scopping.


let parent =()=>{

    let bike = "hero"

    let child =()=>{
        let mobile = "iphone"

        console.log("my phone name is ",mobile)
        console.log("my father's bike name is ", bike)
    }

    // console.log("my son's mobile name is ", mobile)

    child()
}

parent()



// !   higher order function and callback function 

// any function that takes another function as parameter is called higher order function.

// the function we are sending to the higher order function as a parameter is called callback function.


let hi = ()=>{
  console.log("I am hi function...🤚")
}

let hello =(a)=>{

   a()
}

hello(hi)

hello(()=>{
  console.log("I am another one function going to hello function")
})