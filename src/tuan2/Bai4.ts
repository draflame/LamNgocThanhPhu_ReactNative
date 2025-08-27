function randNumber():Promise<number>{
    return new Promise((res)=>{
        const randNumber= Math.round(Math.random()*100);
        res(randNumber)
    })
}
randNumber().then((res)=>console.log("Random number: "+res)).catch((err)=>console.error(err)
)