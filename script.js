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
    // take input from user about data of the book. then instanciate the book with new Book(). Then add it to array.
  }
  
//visualize the book array on the screen somehow.

// how to take input from user? using my html!! so... i need to design a html with input fields and stuff... ok.