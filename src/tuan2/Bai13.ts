async function handleError(): Promise<void> {
    try {
        const data = await new Promise<string>((res, rej) => {
            setTimeout(() => {
                rej("Task failed");
            }, 2000);
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
handleError();
