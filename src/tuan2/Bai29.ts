
function asyncTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 2000) + 1000; // 1-3s
    setTimeout(() => {
      resolve(`Task ${id} finished in ${time} ms`);
    }, time);
  });
}

async function queueProcess() {
  console.log("Starting queue process...");

  const results: string[] = [];

  for (let i = 1; i <= 5; i++) {
    const result = await asyncTask(i); 
    console.log(result);
    results.push(result);
  }

  console.log("All tasks done!");
  console.log(results);
}

queueProcess();
