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
        name: `Lam Ngoc Thanh Phu`,
        email: `phulam03@gmail.com`,
      });
    }, 1000);
  });
}

async function testFetchUser() {
  const user = await fetchUser(1);
  console.log("Fetched user:", user);
}

testFetchUser();