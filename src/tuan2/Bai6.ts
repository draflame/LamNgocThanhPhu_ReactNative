function promiseTask(time:number, msg:string):Promise<string>{
    return new Promise((res)=>{
        setTimeout(() => {
            res(msg)
        }, time);
    })
}
const task1= promiseTask(1000, "Task 1")
const task2= promiseTask(3000, "Task 2")
const task3= promiseTask(2500, "Task 3")

Promise.all([task1,task2,task3]).then((res)=>console.log(res))
