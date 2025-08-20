class Book{
    title: string;
    author: string;
    year: number

    constructor(title:string,author:string,year:number){
        this.title=title
        this.author=author
        this.year=year
    }
}
const book:Book= new Book("One Piece","Oda Eichiro",1997)
console.log(book)