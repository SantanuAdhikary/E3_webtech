

let display =()=>{

    alert("button is clicked")
}




let display2=()=>{

    alert("hello everyone")
}


let changeColor =()=>{

    let card = document.getElementsByClassName("card")
 
    card[0].style.backgroundColor = "red"

    console.log("hello")
}



let changeColor2 =()=>{

  let card2 = document.querySelector(".card2")

  card2.style.backgroundColor = "green"
}


let cc =()=>{
    let card2 = document.querySelector(".card2")
    
    card2.style.backgroundColor = "yellow"

    // alert("onmouse leave")
}






let copyText =()=>{

    let card3 = document.querySelector(".card3")
    let code = card3.innerHTML 

    if(code != "")
    {
        let card4 = document.querySelector(".card4")
    
        card4.innerHTML = code
    
        card3.innerHTML = ""
    }
   
    console.log("copy done")
}




let copyText2 =()=>{

      let card4 = document.querySelector(".card4")
    let code = card4.innerHTML 

    if(code != "")
    {
        let card3 = document.querySelector(".card3")
    
        card3.innerHTML = code
    
        card4.innerHTML = ""
    }
   
    console.log(" done")
}




// !  Event Listener 


// i> we have to target the element 
// ii> addEventListener("eventName",cb)
// ii> this callback function will take one parameter.(event object)

// e.target , e.type 



let btn = document.getElementById("btn")

console.log(btn)


btn.addEventListener("click",()=>{

    alert("btn has clicked")
})


let card5 = document.querySelector(".card5")

card5.addEventListener("mouseover",()=>{

    card5.style.backgroundColor = "green"
})

card5.addEventListener("mouseout",(e)=>{
    
    card5.style.backgroundColor = "red"

    console.log(e.target)
})




let fun1 = ()=>{
    console.log("fun 1 ")
}

let fun2 =()=>{
    console.log("fun 2")
}


let btn2 = document.getElementById("btn2")

btn2.addEventListener("click",()=>{
    console.log("first time")
})

btn2.addEventListener("click",(e)=>{
    console.log("second time time")


    console.log(e.target)
    console.log(e.type)
})



// !  form event 

let form = document.querySelector("form")

console.log(form)

form.addEventListener("submit",(e)=>{

   e.preventDefault()  
   
   let username = document.getElementById("username").value 

   let userpass = document.getElementById("userpass").value

   console.log(username,userpass)

    console.log("submitted...")
})