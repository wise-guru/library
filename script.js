let myLibrary = [hobbit];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return (`${title}, ${author} ${pages} ${isRead}`)
    }
}

function addBookToLibrary() {
    
}

const hobbit = new Book("The Hobbit", "J.R Tolkien", "569", "read")

console.log(hobbit.info());

