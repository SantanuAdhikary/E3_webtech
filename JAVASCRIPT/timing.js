

console.log("start")

let display =()=>{

    console.log("I am displaying")
}


let a = setTimeout(display,4000)


setTimeout(()=>{
   console.log("happy birthday 🎂🎁")
}, 6000)


console.log("end")


// !  clearTimeout()

clearTimeout(a)



// !  setInterval()


let b = setInterval(()=>{
    console.log("hello")
},1000)


// !  clearInterval()


clearInterval(b)




// !   Json 

//  !  JSON.stringify()

let pen = {
    color:"red",
    price : 20 
}

console.log(pen)

console.log(typeof pen)


let jsondata = JSON.stringify(pen)

console.log(jsondata)
console.log(typeof jsondata)


// !  JSON.parse()

let newPen = JSON.parse(jsondata)

console.log(newPen)


// !  swapping two numbers by using thire variable 

let x = 10 
let y = 20 

x = x + y - (y = x)

console.log(x)
console.log(y)