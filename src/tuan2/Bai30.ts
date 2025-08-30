
function fakeApiCall(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 2000) + 500; 
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Success: ${url} (took ${time}ms)`);
      } else {
        reject(` Failed: ${url} (after ${time}ms)`);
      }
    }, time);
  });
}

async function handleApiCalls() {
  const urls = [
    "https://api.service.com/data1",
    "https://api.service.com/data2",
    "https://api.service.com/data3",
    "https://api.service.com/data4",
  ];

  const promises = urls.map((url) => fakeApiCall(url));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${index + 1}: `, result.value);
    } else {
      console.log(`API ${index + 1}: `, result.reason);
    }
  });
}

handleApiCalls();
