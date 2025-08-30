async function doubleAfter1Sec(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 1000);
  });
}

async function addThreeAfter1Sec(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num + 3), 1000);
  });
}
async function runSequentially() {
  console.log("Start sequential calls...");

  const result1 = await doubleAfter1Sec(5);
  console.log("Step 1:", result1);

  const result2 = await addThreeAfter1Sec(result1);
  console.log("Step 2:", result2);

  const result3 = await doubleAfter1Sec(result2);
  console.log("Step 3:", result3);

  console.log("Final result:", result3);
}

runSequentially();

