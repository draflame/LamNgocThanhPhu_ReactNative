function simulateTask(time:number):Promise<string>{
    return new Promise((res)=>{
        setTimeout(() => {
            res("Task done")
        }, time);
    })
}

simulateTask(2000).then((res)=>console.log(res))