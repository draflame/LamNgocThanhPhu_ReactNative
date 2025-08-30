
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Todo = await response.json();
  return data;
}

async function testFetchTodo() {
  try {
    console.log("Fetching todo...");
    const todo = await fetchTodo();
    console.log("Fetched todo:", todo);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

testFetchTodo();
