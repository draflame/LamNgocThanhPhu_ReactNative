function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateWait() {
  console.log("Waiting 5 seconds...");
  await wait(5000);
  console.log("Done waiting!");
}

simulateWait();
