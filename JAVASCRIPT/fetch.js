

let fetchdata = fetch("https://fakestoreapi.com/products")
console.log(fetchdata)   // promise 

fetchdata
.then((data)=>{
        console.log(data)  // response

        let jsondata = data.json()
        console.log(jsondata)   // promise

        jsondata
        .then((data)=>{
                console.log(data)   // original data 


        })
        .catch((err)=>{
                console.log(err)
        })
})
.catch((err)=>{
    console.log(err)
})