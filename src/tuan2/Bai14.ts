async function tripleNumber(num:number):Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 2000);
    });
}
tripleNumber(5).then(result => {
    console.log(result);
});
