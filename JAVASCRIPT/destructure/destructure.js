

// !  Object Destructure 

let student = {
    sname :"rahul",
    age:10,
    phNo:9870891234
}

console.log(student.sname)

   let {age, phNo, sname}   = student

   console.log(sname)


//!   spread operator (...)


let arr1 = [3,4,5,6]
let arr2 = [90,80,70,60]

let arr3 = [...arr1 , ...arr2 ]

console.log(arr3)


let anotherArr = [...arr1, 10]
console.log(anotherArr)


let anotherStudent = {...student, isStudent:true}

console.log(anotherStudent)


// !  rest parameter (...)


let display =(a, b, ...c)=>{

    console.log(a)         // 10
    console.log(b)        // 30
    console.log(c)       // [40,50,60,70,80,90]
    console.log(c[0])   // 40

}

display(10,30,40,50,60,70,80,90)


// !  shallow copy and deep copy 


let arr4 = ['html','css','js','react']

// let copy = arr4   //! shallow copy

// let copy  = [...arr4]   

let copy =  JSON.parse( JSON.stringify(arr4))    // ✅

copy.push("python")

arr4.shift()

console.log(copy)
console.log(arr4)

