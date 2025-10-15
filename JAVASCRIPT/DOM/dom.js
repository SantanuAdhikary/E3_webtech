

// ! 1. how to target any elements 


//  i>  targetting by the id {  document.getElementById("idname") }

 let topic = document.getElementById("topic")

 console.log(topic)


 let p1 = document.getElementById("p1")
 console.log(p1)


//  ii>  targetting by the tag name 

let li = document.getElementsByTagName("li")
console.log(li)

console.log(li[1])


//  iii> targetting by the class name 


let card = document.getElementsByClassName("card")

console.log(card)

console.log(card[1])

card[0].style.textAlign = "center"
card[1].style.textAlign = "right"


// ! 2. how to apply css 

p1.style.color="red"
topic.style.textAlign="center"

li[1].style.color="orangered"


let section =document.getElementsByTagName("section")

console.log(section)

section[0].style.backgroundColor = "pink"
section[0].style.height="150px"