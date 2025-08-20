class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }
}

const user = new User("Eva");

console.log(user.name); 

user.name = "Nguyet Thi";

console.log(user.name); 