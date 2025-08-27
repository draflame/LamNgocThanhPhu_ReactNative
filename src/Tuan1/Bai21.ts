class Repository<T>{
    items: T[] =[]
    add(item:T){
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
}
const repo= new Repository<number>();
repo.add(1);
repo.add(2);
repo.add(3);
const allItems = repo.getAll();
console.log(allItems);