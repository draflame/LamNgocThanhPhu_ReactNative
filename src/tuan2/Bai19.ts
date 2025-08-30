type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
      });
    }, 1000);
  });
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  const promises = ids.map((id) => fetchUser(id));
  return Promise.all(promises);
}

// Test
async function testFetchUsers() {
  const users = await fetchUsers([1, 2, 3, 4]);
  console.log("Fetched users:", users);
}

testFetchUsers();