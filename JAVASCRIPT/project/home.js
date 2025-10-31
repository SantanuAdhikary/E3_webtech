

let username = localStorage.getItem("signupname")

console.log(username)

let h3 = document.createElement("h3")
h3.innerText = username

let right = document.querySelector(".right")

right.append(h3)


let logout = document.getElementById("logout")

logout.addEventListener("click",()=>{
    open("./signup.html")
})





let getData = async ()=>{
  
    try{

        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
    
         let main = document.querySelector("main")

        data.map((ele)=>{

            let div = document.createElement("div")
            div.classList.add("card")

            div.innerHTML = ` <img src= ${ele.image}> <h2> ${ele.title.slice(0,25)}... </h2> <h2> Price: ${ele.price}  </h2> <h2> Ratings: ${ele.rating.rate} </h2>`
    
    
            main.append(div)
        })
    
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()









