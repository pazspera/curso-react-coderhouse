const promesa = new Promise((resolve, reject) => {
    const object = {
        id: "123",
        name: "Bruce",
        description: "Wayne", 
        stock: 23,
    };

    setTimeout(()=> {
        resolve(object)
    }, 3000)

})

promesa
    .then(result =>{
        console.dir(result)
    })
    .catch(err => {
        console.log(err)
    })   

