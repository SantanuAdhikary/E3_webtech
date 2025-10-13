
let p = new Promise((resolve , reject)=>{

    let study =  true

    if(study)
    {
        resolve("from tomorrow I will study")
    }
    else{
        reject("today I don't have mood to study")
    }
})

console.log(p)

p
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})
.finally(
    console.log("exam will be there")
)