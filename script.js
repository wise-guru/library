let myLibrary = [];

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

//Toggle pages read button//
$('.toggle').click(function(e) {
    var toggle = this;
    
    e.preventDefault();
    
    $(toggle).toggleClass('toggle--on')
           .toggleClass('toggle--off')
           .addClass('toggle--moving');
    
    setTimeout(function() {
      $(toggle).removeClass('toggle--moving');
    }, 200)
  });