
function asyncTask(id: number, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task ${id} done after ${delay}ms`), delay);
  });
}

async function runForAwaitOf() {
  const tasks = [
    asyncTask(1, 1000),
    asyncTask(2, 500),
    asyncTask(3, 1500),
  ];

  for await (const result of tasks) {
    console.log(result);
  }


}

runForAwaitOf();
