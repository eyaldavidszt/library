let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    
    Book.prototype.info = function() {
        let readStatus;
        if (this.read) {
            readStatus = 'read';
        }
        else {
            readStatus = 'not read yet';
        }
        return `${this.title} by ${this.author}, ${pages} pages, ${readStatus}`;

    }
}
const bookOne = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
console.log(bookOne.info());

function addBookToLibrary() {
  }
  
//**********************

//on page load, parse array and make it into onscreen cards(will only be relevant once data storing is added)

//on add book->fillform->submit, create new book object and push it to array.
// then create dom element of last array object with index attribute of array length(minus 1) and append it to body

//on remove book, find index="" attribute with js, then remove the object in that index from the array, 
//  and also remove the element associated with it from the page. 