

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