
async function downloadFile(filename: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Downloading ${filename}...`);
    setTimeout(() => {
      console.log(`${filename} downloaded successfully!`);
      resolve();
    }, 3000); 
  });
}

async function testDownloadFile() {
  await downloadFile("example.zip");
  console.log("All tasks finished.");
}

testDownloadFile();
