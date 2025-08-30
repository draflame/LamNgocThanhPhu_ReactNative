// Bài 22: Fetch multiple resources in parallel
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodo(id: number): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

async function fetchTodosParallel(ids: number[]): Promise<Todo[]> {
  const promises = ids.map((id) => fetchTodo(id));
  return Promise.all(promises);
}

// Test
async function testFetchTodosParallel() {
  try {
    console.log("Fetching multiple todos...");
    const todos = await fetchTodosParallel([1, 2, 3, 4, 5]);
    console.log("Fetched todos:", todos);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

testFetchTodosParallel();
