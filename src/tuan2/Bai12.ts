function simulateTask(time:number):Promise<string>{
    return new Promise((res)=>{
        setTimeout(() => {
            res("Task done")
        }, time);
    })
}
async function callSimulateTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
callSimulateTask();