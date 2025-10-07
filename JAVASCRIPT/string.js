
//!  how to declare string 

let str1 = 'Hello lara'
let str2 = "HI"
let str3 = "Bye"

// ! how to know the length of the string 

console.log(str1.length)

// !  methods of string 


// !  1. toUpperCase() 

console.log(str1.toUpperCase())
console.log(str1)

// ! 2. toLowerCase()

console.log(str2.toLowerCase())
console.log(str2)


// ! 3. charAt()

console.log(str1.charAt(2))

// ! 4. indexof()

console.log(str1.indexOf("l"))

// ! 5. lastIndexOf()

console.log(str1.lastIndexOf("l"))

// ! 6. replace()

console.log(str1.replace("l", "$"))

// ! 7. replaceAll()

console.log(str1.replaceAll("l","$"))

let msg = "i am from bangalore, I love bangalore"

console.log(msg)

console.log(msg.replaceAll("bangalore","chennai"))

// ! 8. includes()

console.log(msg.includes("bangalore"))
console.log(msg.includes("chennai"))

// ! 9. concat()

console.log(str1.concat(" ",str2 , " my name is santanu"))


// !  10. slice()

let wish = "happy birthday"

console.log(wish.slice(0,5))

console.log(wish.slice(6))

console.log(wish.slice(-3))

console.log(wish.slice(-3,-1))

console.log(wish.slice(4,0))


// !  11. substring()

console.log(wish.substring(0,5))
console.log(wish.substring(6))

console.log(wish.substring(-3))
console.log(wish.substring(4,0))


// ! 12. trim()

let mobileName = "  samsung  "

console.log(mobileName.length)
console.log(mobileName)

console.log(mobileName.trim())