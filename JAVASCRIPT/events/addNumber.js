

let form = document.querySelector("form")


console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()

   let num1 = parseInt( document.getElementById("num1").value )
   let num2 = parseInt( document.getElementById("num2").value )
   
   let sum = num1 + num2 

   let output = document.querySelector(".output")

   output.innerHTML = `<h1> the addition of ${num1} and ${num2} is ${sum} </h1>`
 
    console.log("done")
})



    
let select = document.querySelector("select")

select.addEventListener("change",(e)=>{

//    console.log(e.target.value)

let outer = document.querySelector(".outer")

 outer.style.backgroundColor = e.target.value
    console.log('changing...')
})



let un = document.getElementById("username")

un.addEventListener("keyup",(e)=>{

    let display = document.querySelector(".display")

    console.log(e.target.value)

    display.innerHTML = `<h2> ${e.target.value} </h2>` 

    console.log("key is up")
})


un.addEventListener("keypress",()=>{
    console.log("key is pressed")
})



