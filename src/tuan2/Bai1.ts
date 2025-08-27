const HelloAsync= new Promise<string>((res)=>{
    setTimeout(() => {
        res("Heloo Async")       
    }, 2000
);
})
HelloAsync.then((res)=>console.log(res))