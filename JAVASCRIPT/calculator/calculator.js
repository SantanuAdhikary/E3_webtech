

let takeData =(data)=>{

    // console.log(data)

    let input = document.querySelector("input")
    input.value += data
}

let calculate =()=>{
    let inputValue = document.querySelector("input").value
    console.log(inputValue)

    let ans = eval(inputValue)   //! important 
    
    document.querySelector("input").value = ans ;
}


let clearScreen =()=>{


   document.querySelector("input").value = ""
}



let remove=()=>{

    let inputValue = document.querySelector("input").value
    let data = inputValue.slice(0,-1)
    // console.log(data)

    document.querySelector('input').value = data
    // console.log("remove")`
}