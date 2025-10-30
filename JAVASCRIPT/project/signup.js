

let form = document.querySelector("form")

console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let username = document.getElementById("username").value
    let userpass = document.getElementById("userpass").value
    let useremail = document.getElementById("useremail").value

    console.log(username,userpass,useremail)


    // ! storing data in localstorage

    localStorage.setItem("signupname",username)
    localStorage.setItem("signuppass",userpass)
    localStorage.setItem("signupemail",useremail)
   
    alert("signup done")

    open("./login.html")
})





