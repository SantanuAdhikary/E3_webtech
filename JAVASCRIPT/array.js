
let arr = [10 , true , "html",[20,"css"]]

console.log(arr)

console.log(arr[2])

// !  length

console.log(arr.length)


// !  array methods 

// ! 1. push()

let marks = [80,90,67,88]

marks.push(99)

console.log(marks)

// ! 2. pop()

let fruits = ['apple','banana','orange','lemon']

fruits.pop()

console.log(fruits)

//!  3. unshift()

let cartoons = ['tom','jerry','doreamon']

cartoons.unshift("ben10")

console.log(cartoons)

// ! 4. shift()

let laptops = ['hp','lenovo','acer','dell']

laptops.shift()

console.log(laptops)

// ! 5. includes()

// it is used to know the given element is present or not, if the element is present it will return true else it will return false.

console.log(laptops.includes("dell"))
console.log(laptops.includes("hp"))

// ! 6. indexOf()

let numbers = [10,20,30,40,20,30,10,15]

console.log(numbers.indexOf(20))

// ! 7. lastIndexOf()

console.log(numbers.lastIndexOf(20))

// ! 8. reverse()

numbers.reverse()

console.log(numbers)

// ! 9. concat()

let sub1 = ["html","css","js"]
let sub2 = ["java","python"]

console.log(sub1.concat(sub2))

