class Book{
    title:String
    author:String
    constructor(title:String, author:String){
        this.title=title
        this.author=author
    }
}
class User{
    name:String
    email:String
    constructor(name:String, email:String){
        this.name=name
        this.email=email
    }
}
class Library{
    books: Book[]
    users: User[]
    constructor(){
        this.books=[]
        this.users=[]
    }
    addBook(book: Book){
        this.books.push(book)
    }
}
const library = new Library()
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"))
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"))
console.log(library.books)