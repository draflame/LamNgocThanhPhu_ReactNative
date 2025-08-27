async function processNumber(): Promise<number> {
  let num = 2;
  num = num * num;    
  num = num * 2;      
  num = num + 5;      
  return num;
}

processNumber().then(console.log); 
