
type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUser(id: number): Promise<User> {
  const apiCall = new Promise<User>((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 500; // 500ms → 3500ms
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
      });
    }, delay);
  });

  const timeout = new Promise<User>((_, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), 2000);
  });

  return Promise.race([apiCall, timeout]);
}

async function testFetchUser() {
  try {
    const user = await fetchUser(1);
    console.log("Fetched user:", user);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

testFetchUser();
