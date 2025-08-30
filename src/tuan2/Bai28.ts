
function asyncTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 2000) + 1000; // 1-3s
    setTimeout(() => {
      resolve(`Task ${id} finished in ${time} ms`);
    }, time);
  });
}

async function batchProcess() {
  console.log("Starting batch process...");

  const tasks = [
    asyncTask(1),
    asyncTask(2),
    asyncTask(3),
    asyncTask(4),
    asyncTask(5),
  ];

  const results = await Promise.all(tasks);

  console.log("All tasks done!");
  console.log(results);
}

batchProcess();
