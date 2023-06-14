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
myLibrary.push(bookOne);

// receives a book object(one which is made with Book constructor) and turns it into dom element.
function createBookElement(book, index) {
    let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let read = book.read ? 'Read' : 'Not read yet'; 

    let newBook = document.createElement('div');
    newBook.classList.add('book');

    let titleHeader = document.createElement('h1');
    titleHeader.textContent = title;
    
    let authorHeader = document.createElement('h2');
    authorHeader.textContent = author;
    
    let pagesHeader = document.createElement('h3');
    pagesHeader.textContent = `${pages} pages`;
    
    let readHeader = document.createElement('button');
    readHeader.classList.add('read-status-changer');
    readHeader.textContent = `${read}`;
    
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');

    let randRed = Math.floor((Math.random() * 150) + 50);
    let randGreen = Math.floor((Math.random() * 150) + 50);
    let randBlue = Math.floor((Math.random() * 200) + 1);
    newBook.style.backgroundColor = `rgb(${randRed}, ${randGreen}, ${randBlue})`;
    
    
    
    newBook.appendChild(titleHeader);
    newBook.appendChild(authorHeader);
    newBook.appendChild(pagesHeader);

    let newBookInfo = document.createElement('div');
    newBookInfo.setAttribute('index', index);
    newBookInfo.appendChild(newBook);
    newBookInfo.appendChild(readHeader);
    newBookInfo.appendChild(removeButton);
    
    newBookInfo.classList.add('book-info');
    
    return newBookInfo;
}

function loadArray() {
    let index = 0;
    for (const book of myLibrary) {
        if (book == null) return;
        let newBookInfo = createBookElement(book, index);
        let bookSection = document.querySelector('.books');
        bookSection.appendChild(newBookInfo);
        index++;
    }
}

loadArray();


function addBook(event) {
    // get user input and call constructor function with it
    event.preventDefault();
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    const pages = document.querySelector('#pages-input').value;
    const read = document.querySelector('#read-status')['checked'] ? true : false;

    let error = document.querySelector('.error-message');

    if (!(title && title.length > 1 && author && author.length > 1 && pages && parseInt(pages))) {
        if (!(pages && parseInt(pages))) {
            error.textContent = 'Page count must be a number';
        }
        return;
    }
    const book = new Book(title, author, pages, read);
    
    // push new object to array::   
    
    myLibrary.push(book);
    let index = myLibrary.length - 1;
    let bookInfo = createBookElement(book, index);

    let books = document.querySelector('.books');
    books.appendChild(bookInfo);

    
    document.querySelector('#author-input').value = '';
    document.querySelector('#title-input').value = '';
    document.querySelector('#pages-input').value = '';
    document.querySelector('#read-status').checked = false;

    let modal = document.querySelector('#modal');
    let overlay = document.querySelector('#overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    

  }

/// on button click, getAttribute(index) of closest bookInfo.
/// myLibrary[that index] == null 
/// remove DOM of closest bookInfo

let body = document.querySelector('body');
body.addEventListener('click', (event) => {
        if (event.target.className === 'remove') {
            console.log('hello');
            let bookToDelete = event.target.closest('.book-info');
            let index = bookToDelete.getAttribute('index');
            myLibrary[index] = null;
            console.log(myLibrary[index]);
            bookToDelete.remove();
        }
    });

body.addEventListener('click', (event) => {
    if (event.target.className === 'read-status-changer') {
        newText = (event.target.textContent == 'Read' ? 'Not read yet' : 'Read');
        event.target.textContent = newText;
        let index = event.target.closest('.book-info').getAttribute('index');
        let bookToChange = myLibrary[index];
        if (bookToChange.read)
        {
            bookToChange.read = false;
        }
        else {
            bookToChange.read = true;
        }
    }
});

  //*****modal*****//

  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.querySelector('#overlay');

  openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = document.querySelector(button.dataset.modalTarget);
          openModal(modal);
      });
  });

  closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          closeModal(modal);
      });
  });

  function openModal(modal) {
      if (modal == null) return;

      modal.classList.add('active');
      overlay.classList.add('active');
  }

  function closeModal(modal) {
      if (modal == null) return;

      modal.classList.remove('active');
      overlay.classList.remove('active');
  }

  overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active');
      modals.forEach(modal => {
          closeModal(modal);
      });
  });

  let creator = document.querySelector('.create-btn');
  creator.addEventListener('click', addBook);
//**********//
