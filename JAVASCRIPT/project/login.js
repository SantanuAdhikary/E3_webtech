

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
        e.preventDefault()


        let loginemail = document.getElementById("useremail").value 
        let loginpass = document.getElementById("userpass").value


        console.log(loginemail, loginpass)

        //! take the data from localstorage 

        let signupemail = localStorage.getItem('signupemail')
        let signuppass = localStorage.getItem("signuppass")

        console.log(signupemail , signuppass)


        if(loginemail == signupemail  && loginpass == signuppass)
        {
                alert("login done successfully")
                open("./home.html")
        }

        else{
            alert("wrong credentials")
        }

        

})