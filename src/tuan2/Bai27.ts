
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} to fetch ${url}...`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json(); 
    } catch (err) {
      console.error(`Attempt ${attempt} failed: ${(err as Error).message}`);
      if (attempt === retries) {
        throw new Error(`Failed after ${retries} attempts`);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function testFetchWithRetry() {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Data fetched successfully:", data);
  } catch (err) {
    console.error("Final error:", (err as Error).message);
  }
}

testFetchWithRetry();
