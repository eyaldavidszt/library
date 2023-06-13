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
    // get user input and call constructor function with it
    myLibrary.push(bookOne);
  }

addBookToLibrary();
  
//**********************

//on page load, parse array and make it into onscreen cards(will only be relevant once data storing is added)

//on add book->fillform->submit, create new book object and push it to array.
// then create dom element of last array object with index attribute of array length(minus 1) and append it to body

//on remove book, find index="" attribute with js, then remove the object in that index from the array, 
//  and also remove the element associated with it from the page. 
function loadArray() {
    for (const book of myLibrary) {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read ? 'Read' : 'Not read yet'; 
        
        let randRed = Math.floor((Math.random() * 150) + 50);
        let randGreen = Math.floor((Math.random() * 150) + 50);
        let randBlue = Math.floor((Math.random() * 200) + 1);

        let newBook = document.createElement('div');
        newBook.classList.add('book');

        let titleHeader = document.createElement('h1');
        titleHeader.textContent = title;

        let authorHeader = document.createElement('h2');
        authorHeader.textContent = author;

        let pagesHeader = document.createElement('h3');
        pagesHeader.textContent = `${pages} pages`;

        newBook.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;


        newBook.appendChild(titleHeader);
        newBook.appendChild(authorHeader);
        newBook.appendChild(pagesHeader);

        let bookSection = document.querySelector('.books');
        let newBookInfo = document.createElement('div');
        newBookInfo.classList.add('.book-info');

        let readHeader = document.createElement('h3');
        readHeader.textContent = `${read}`;
        newBookInfo.appendChild(newBook);
        newBookInfo.appendChild(readHeader);
        bookSection.appendChild(newBookInfo);
    }
}

loadArray();
    
let book = document.querySelector('.book');
let randRed = Math.floor((Math.random() * 150) + 50);
let randGreen = Math.floor((Math.random() * 150) + 50);
let randBlue = Math.floor((Math.random() * 200) + 1);
book.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
