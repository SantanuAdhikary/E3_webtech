

// !  Date object 

let now = new Date()

console.log(now)


console.log("now hour is : ",  now.getHours())
console.log("now minute is : ", now.getMinutes())
console.log("now second is : ", now.getSeconds())
console.log("year is : ", now.getFullYear())

console.log(now.getMonth())   

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let monthIndex = now.getMonth()
console.log("current month is : ", months[monthIndex])


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


console.log(now.getDay())


console.log("today day is : ", days[now.getDay()])


console.log(now.toLocaleTimeString())
console.log(now.toLocaleDateString())



let displayTime =()=>{

    let now = new Date()
    let time = now.toLocaleTimeString()
    let output = document.querySelector(".output")
    output.innerHTML = `<h2> Time : ${time} </h2>`
}

displayTime()

setInterval(displayTime,1000)




