function HelloAsync():Promise<string>{
    return new Promise((res)=>{ 
        setTimeout(() => {
            res("Hello Async")
        }, 2000);}
       
    )
}

HelloAsync().then((res)=>console.log(res))