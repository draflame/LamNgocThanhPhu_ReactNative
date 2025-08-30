function simulateTask(time:number):Promise<string>{
    return new Promise((res)=>{
        setTimeout(() => {
            res("Task done")
        }, time);
    })
}
async function runInParallel() {
    const tasks = [
        simulateTask(1000),
        simulateTask(2000),
        simulateTask(1500)
    ];
    const results = await Promise.all(tasks);
    console.log("All tasks completed:");
    results.forEach((result, index) => {
        console.log(`Task ${index + 1}: ${result}`);
    });
}
runInParallel();