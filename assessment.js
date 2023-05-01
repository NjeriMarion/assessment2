// Create a function called getAvailableBooks that returns an array of all available
// books.
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

function getAvailableBooks(){
    let availableBooks = []
    for (let i =0; i < books.length; i++){
        if(books[i].isAvailable === true){
            availableBooks.push(books[i])
        }
    }
    return availableBooks
}
console.log("*******getAvailableBooks*************")
console.log(getAvailableBooks())

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(authorName){
    let authorBooks = []
    for(let x = 0; x < books.length ; x++){
        if (books[x].author === authorName){
            authorBooks.push(books[x].title)
        }
    }
    return authorBooks
}
console.log("*******getBooksByAuthor*************")
console.log(getBooksByAuthor('Charles Dickens'))
console.log(getBooksByAuthor('F. Scott Fitzgerald'))


// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook (newBook){
    for (x = 0 ; x <= newBook ;x++){
        if( title && author && publicationYear && isAvailable){
            books.push(newBook)     
        }
        else{
            console.log("Add all respective fields")
        }
    }  
    return books 
}
console.log("********* addNewBook*************")
console.log(addNewBook({ title: 'BooksClub', author: 'NewAuthor', publicationYear: 2000, isAvailable: true }))
console.log(addNewBook({ title: 'BooksClub', author: 'NewAuthor', isAvailable: true }))


// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(bookTitle){
    let bookUpdate = []
    for(let y = 0 ; y <= books.length ; y++){
        if (books[y].title === bookTitle){
            books[y].isAvailable = false
            bookUpdate.push(books[y])
            break
        }
        else if(books[y].title !== bookTitle){
            console.log(`${bookTitle} is not available`)
        }
    }
    return bookUpdate
}
console.log("*********checkoutBook *************")
console.log(checkoutBook('The Odyssey'))

//  Create a function returnBook that takes a book title as an argument and changes the
//  book's isAvailable property to true. If the book is not found in the library, the function
//  should return a message indicating that the book does not belong to the library.

function returnBook(bookTitle){
    let bookfalseUpdate = []
    for(let y = 0 ; y <= books.length ; y++){
        if (books[y].title === bookTitle){
            books[y].isAvailable = true
            bookfalseUpdate.push(books[y])
            break
        }
        else if(books[y].title !== bookTitle){
            console.log(`${bookTitle} is not available`)
        }
    }
    return bookfalseUpdate
}
console.log("*********returnBook*************")
console.log(returnBook('Great Expectations'))
