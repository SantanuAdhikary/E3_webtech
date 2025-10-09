

let student = {

    sid:10,
    sname : "rahul",
    isPlayer:false,
    skills : ['html','css','js'],
    address :{
        city:"chennai",
        state:"tamilnadu",
        country:"India"
    }
}

// !  How to access 

console.log(student.sname)
console.log(student.sid)
console.log(student.address.state)

// !  how to modify 

console.log(student)

student.sid = 20

console.log(student)

// !  how to add new key 

student.phNo = 9876543210

console.log(student)

// ! how to delete 

delete student.phNo  

console.log(student)


// !  methods 


//!  1.  Object.keys()

// it will return one array where all the keys will be present.

console.log(Object.keys(student))

// !  2. Object.values()

// it will return one array where all the values will be present.

console.log(Object.values(student))

// ! 3. Object.entries()

// it will return one nested array , where all the key value pairs will be stored in each indiviual arrays.

console.log(Object.entries(student))


// ! 4. Object.freeze()

let pen = {
    color:"blue",
    price : 50 
}
console.log(pen)

Object.freeze(pen)

console.log("after freeze")

pen.price = 100         // we can't modify 
pen.brand = "camlin"   // we can't add 
delete pen.price      // we can't delete   

console.log(pen)

// ! 5. Object.isFrozen()

console.log(Object.isFrozen(pen))          // true
console.log(Object.isFrozen(student))     // false


// ! 6. Object.seal()

let laptop ={
    color:"gray",
    brand:"hp"
}
console.log(laptop)

console.log("after sealed") 
Object.seal(laptop)

laptop.price = 70000      // we can't add
delete laptop.brand      // we can't delete
laptop.color = "black"  // but we can modify
console.log(laptop)

// !  7. Object.isSealed()

console.log(Object.isSealed(laptop))
console.log(Object.isSealed(student))
console.log(Object.isSealed(pen))


// ! 9. Object.assign()


let stu = {
    sname :"rohit",
    age:15
}

let add = {
    city:"mumbai",
    pin:123456,
    country: "India"
}

let combined = Object.assign({},stu, add)

console.log(combined)


// ! 10. objectname.hasOwnProperty()


console.log(add.hasOwnProperty("city"))
console.log(add.hasOwnProperty("location"))