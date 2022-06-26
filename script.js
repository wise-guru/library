let myLibrary = [];


const cards = document.querySelector('.cards')
const card = document.querySelector('.card')

const submitBtn = document.querySelector('.submit-btn')

const titleText = document.querySelector('#name').value
const authorText = document.querySelector('#author').value
const pagesText = document.querySelector('#author').value
const readText = document.querySelector('#read').value




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

function validateForm(e) {
    e.preventDefault()
    addBookToLibrary(titleText, authorText, pagesText, readText);
};


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
    showBookInfo();
}





function showBookInfo() {
    for (let i = 0; i <= myLibrary.length; i++) {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        cards.appendChild(newCard)

        const bookTitle = document.createElement('div')
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('book-title')
        newCard.appendChild(bookTitle)

        const bookAuthor = document.createElement('div')
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add('book-author')
        newCard.appendChild(bookAuthor)

        const bookPages = document.createElement('div')
        bookPages.textContent = myLibrary[i].pages
        bookPages.classList.add('book-pages')
        newCard.appendChild(bookPages)

        const bookIsRead = document.createElement('div')
        bookIsRead.textContent = myLibrary[i].read
        bookIsRead.classList.add('.book-read')
        newCard.appendChild(bookIsRead)
    }
    
}

submitBtn.addEventListener('click', function(e) {
    validateForm(e)
})
