

let subjects = ["html","css","js","react","java","python","nodejs","express","django"]

let ol = document.querySelector("ol")
console.log(ol)

subjects.map((ele)=>{
   
    let li = document.createElement("li")
    li.innerText = ele
    ol.append(li)
})



let employee = [
    {
        ename:"miller",
        salary:7000,
        location:"new york"
    },
    {
        ename:"adams",
        salary:5000,
        location:"chennai"
    },
    {
        ename:"scott",
        salary:6000,
        location:"kolkata"
    },
    {
        ename:"blake",
        salary:7000,
        location:"mumbai"
    },
]


let main = document.querySelector("main")
console.log(main)

employee.map((ele)=>{

    let div = document.createElement("div")
    div.classList.add("card")

    div.innerHTML = ` <h3>emp name : ${ele.ename} </h3> <h3>salary is : ${ele.salary}</h3> <h3> location : ${ele.location}</h3> `
    

    main.append(div)

})



// ! string interpolation 

let num1 = 20 
let num2 = 30 


let sum = num1 + num2 


console.log(sum)

// the addition of 20 and 30 is 50

console.log(`the addition of ${num1} and ${num2} is ${sum} `)