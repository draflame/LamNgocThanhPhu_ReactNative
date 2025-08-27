const readAndFilterEven = () => {
  return new Promise((resolve) => {
    const arr = [1, 2, 3, 4, 5, 6];
    setTimeout(() => {
      const evens = arr.filter(num => num % 2 === 0);
      resolve(evens);
    }, 1000);
  });
};

readAndFilterEven().then(result => console.log("Even numbers:", result));
