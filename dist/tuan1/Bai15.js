"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
}
const library = new Library();
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
console.log(library.books);
//# sourceMappingURL=Bai15.js.map