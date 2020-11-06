

// function Book(title,author,pages,read){
// this.title = title;
// this.author = author;
// this.pages = pages;
// this.read = read;
// }
class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    }


let myLibraray = [];

function addBookToLibrary(book){
myLibraray.push(book);
}

function render(){
    const booksContainer = document.querySelector('.books-container');
    booksContainer.innerHTML = '';
    myLibraray.forEach(book =>{
    const frag = new DocumentFragment();
    const removeContainer = document.createElement('div');
    removeContainer.classList.add('removal-box');

    const removeSign = document.createElement('div');
    removeSign.classList.add('remove-book');
    removeSign.textContent = 'X';

    removeContainer.appendChild(removeSign);

    removeSign.addEventListener('click', function(e){
        const clicked = e.target;
        clicked.parentElement.parentElement.style.display = 'none';
    });

    const bookStructure = document.createElement('div');
    bookStructure.classList.add('col-6','col-sm-4','col-md-3','book','card-body');

    const bookTitle = document.createElement('h5');
    bookTitle.classList.add('title-content','book-content', 'card-title');
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author-content','book-content','card-subtitle','mb-2','text-muted');
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement('div');
    bookPages.classList.add('pages-content','book-content' ,'card-text');
    bookPages.textContent = `${book.pages} pages`;

    const bookRead = document.createElement('div');
    bookRead.classList.add('read-content', 'book-content', 'btn', 'btn-primary');
    bookRead.textContent = 'Read This Book?'

    const bookReadQ = document.createElement('span');
    bookReadQ.classList.add('question');

    const bookReadAnswer = document.createElement('input');
    bookReadAnswer.setAttribute('type','checkbox')
    bookReadAnswer.classList.add('answer');

    if(book.read == true)
    {
        bookReadAnswer.checked = true;
    }else{
        bookReadAnswer.checked = false;
    }

    bookRead.appendChild(bookReadQ);
    bookRead.appendChild(bookReadAnswer);
    
    frag.appendChild(bookStructure).appendChild(removeContainer);
    bookStructure.appendChild(bookTitle);
    bookStructure.appendChild(bookAuthor);
    bookStructure.appendChild(bookPages);
    bookStructure.appendChild(bookRead);
    booksContainer.appendChild(frag);
        
    })
}
render();

const submitBtn = document.querySelector('.add-book');

submitBtn.addEventListener('click', captureInput);
function captureInput(){
    if(document.querySelector('#book-title-input').value && document.querySelector('#author-name-input').value && document.querySelector('#pages-number-input').value ){
    const newBook = {
        title: document.querySelector('#book-title-input').value,
        author:document.querySelector('#author-name-input').value ,
        pages:document.querySelector('#pages-number-input').value,
        read:document.querySelector('#gridCheck1').checked
    }
    console.log(newBook.read);
    myLibraray.push(newBook);
    render();
    document.querySelector('#book-title-input').value = '';
    document.querySelector('#author-name-input').value = '';
    document.querySelector('#pages-number-input').value = '';
    document.querySelector('#gridCheck1').checked = false;
}else{
    alert('Please Fill out ALL Book Info to Add it!')
}

}