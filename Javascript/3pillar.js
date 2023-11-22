const BOOK_API = "https://example.com/api/books";

const fakeAjax = function (url, cb) {
    setTimeout(function () {
        cb([
          "The Catcher in the Rye",
          "To Kill a Mockingbird",
          "1984",
          "The Great Gatsby",
        ]);
      }, 500);
}

class Bookshelf {
    
    constructor(){
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName){
        if(!bookName.includes("Great")){
            this.favoriteBooks.push(bookName)
        }
    }

    printFavoriteBooks(){
        console.log(`Favorite Books : ${String(this.favoriteBooks.length)}`)

        for (let books of this.favoriteBooks){
        console.log(books)}
    }

}

function loadBooks (bookshelfInstance){

    fakeAjax(BOOK_API, function (books) {
        for (let book of books){
            bookshelfInstance.addFavoriteBook(book);
        }

        bookshelfInstance.printFavoriteBooks();
    }
    )

}
var myBookshelf = new Bookshelf();

loadBooks(myBookshelf)