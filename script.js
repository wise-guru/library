let myLibrary = [];


const cards = document.querySelector('.cards')
const card = document.querySelector('.card')
const submitBtn = document.querySelector('.submit-btn')
const titleText = document.querySelector('#name')
const authorText = document.querySelector('#author')
const pagesText = document.querySelector('#pages')
const readText = document.querySelector('#read')
const bookForm = document.querySelector('.book-form')




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

function validateForm(e) {
    e.preventDefault()

    if (titleText.value !== '' && authorText.value !== '' && pagesText.value > 0) {
    addBookToLibrary(titleText.value, authorText.value, pagesText.value, readText.checked);
    }

    bookForm.reset()
};


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
    showBookInfo();
}





function showBookInfo() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        cards.appendChild(newCard)

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('book-title')
        newCard.appendChild(bookTitle)
        bookTitle.textContent = myLibrary[i].title;

        const bookAuthor = document.createElement('div')
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add('book-author')
        newCard.appendChild(bookAuthor)

        const bookPages = document.createElement('div')
        bookPages.textContent = myLibrary[i].pages
        bookPages.classList.add('book-pages')
        newCard.appendChild(bookPages)

        const bookIsRead = document.createElement('div')
        if(myLibrary[i].read == false) {
        bookIsRead.textContent = "Not Read";
        } else {
        bookIsRead.textContent = "Read";
            }
        bookIsRead.classList.add('book-read')
        newCard.appendChild(bookIsRead)
    }

  
}

submitBtn.addEventListener('click', function(e) {
    validateForm(e)
})
