

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

