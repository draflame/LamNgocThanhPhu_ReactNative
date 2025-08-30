
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

async function fetchCompletedTodos(): Promise<Todo[]> {
  const todos = await fetchTodos();
  return todos.filter((todo) => todo.completed);
}

async function testFetchCompletedTodos() {
  try {
    console.log("Fetching completed todos...");
    const completed = await fetchCompletedTodos();
    console.log("Completed todos:", completed.slice(0, 5)); 
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
}

testFetchCompletedTodos();
