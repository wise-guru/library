let myLibrary = [];


const cards = document.querySelector('.cards')
const card = document.querySelector('.card')
const submitBtn = document.querySelector('.submit-btn')
const titleText = document.querySelector('#name')
const authorText = document.querySelector('#author')
const pagesText = document.querySelector('#pages')
const readText = document.querySelector('#read')
const bookForm = document.querySelector('.book-form')
const trash = document.querySelector('.trash')






function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

//Makes sure not to create card unless these conditions are met//

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
    showBookInfo(book);
}



//To create a new card with every valid submission//

function showBookInfo(book) {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        cards.appendChild(newCard)

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('book-title')
        newCard.appendChild(bookTitle)
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('div')
        bookAuthor.textContent = book.author;
        bookAuthor.classList.add('book-author')
        newCard.appendChild(bookAuthor)

        const bookPages = document.createElement('div')
        bookPages.textContent = book.pages
        bookPages.classList.add('book-pages')
        newCard.appendChild(bookPages)

        const bookIsRead = document.createElement('div')
        if(myLibrary.read == false) {
        bookIsRead.textContent = "Not Read";
        } else {
        bookIsRead.textContent = "Read";
            }
        bookIsRead.classList.add('book-read')
        newCard.appendChild(bookIsRead)

        const cardIcons = document.createElement('div')
        cardIcons.classList.add('card-icons')
        newCard.appendChild(cardIcons)

        trashImg = document.createElement('img')
        trashImg.src = "./img/delete-outline.png"
        trashImg.classList.add('trash')
        cardIcons.appendChild(trashImg)

        newCard.setAttribute("data-index", book)

        trashImg.addEventListener('click', function(e) {
            removeBook(e)
        } )

        function removeBook(e) {
            let selectedBook =  e.target.parentNode.parentNode;
            let selectedIndex = selectedBook.getAttribute("data-index")
            myLibrary.splice([selectedIndex])
            cards.removeChild(e.target.parentNode.parentNode)
            
        }
}



submitBtn.addEventListener('click', function(e) {
    validateForm(e)
})



let bookCards = document.querySelectorAll('.card')
let bookCards_array = Array.from(bookCards)


