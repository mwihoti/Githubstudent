var favoriteBooks = []

function addFavoriteBook (bookName) {
    if(bookName.includes("Great")){
        favoriteBooks.push(bookName)
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books:  , ${favoriteBooks.length}`)
    for (let favBooks of favoriteBooks)
    console.log(favBooks);
}
addFavoriteBook('The Great Gatsby');
addFavoriteBook('The Greedy Gatsby');
printFavoriteBooks()


