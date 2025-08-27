const examplePromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  setTimeout(() => {
    if (success) {
      resolve("Thanh cong!");
    } else {
      reject("Loi");
    }
  }, 1000);
});

examplePromise
  .then(result => console.log("Result:", result))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Done"));
