// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }
// class UI {
//     static displayBook() {
//         const books = Store.getBooks();
//         books.forEach((book) => UI.addBookToList(book));
//     }
//     static addBookToList(book) {
//         var list = document.querySelector('#book-list');
//         var row = document.createElement('tr');
//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class='btn btn-danger btn-sm delete'>&times;</a></td>
//         `
//         list.appendChild(row);
//     }
//     static clearFields() {
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//         document.querySelector('#isbn').value = '';
//     }
//     static deleteBook(el) {
//         el.parentElement.parentElement.remove();
//     }
//     static showAlert(message, className) {
//         var div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         div.appendChild(document.createTextNode(message));
//         var container = document.querySelector('.container');
//         var form = document.querySelector('#form-book');
//         container.insertBefore(div, form);
//         setTimeout(() => {
//             document.querySelector('.alert').remove();
//         }, 3000)
//     }
// }

// class Store {
//     static getBooks() {
//         let books;
//         if (localStorage.getItem('books') === null) {
//             books = [];
//         } else {
//             books = JSON.parse(localStorage.getItem('books'));
//         }
//         return books;
//     }
//     static addBook(book) {
//         const books = Store.getBooks();
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(books))
//     }
//     static removeBook(isbn) {
//         const books = Store.getBooks();
//         books.forEach((book, index) => {
//             if (book.isbn === isbn) {
//                 books.splice(index, 1);
//             }
//         });
//         localStorage.setItem('books', JSON.stringify(books))
//     }
// }
// document.addEventListener('DOMContentLoaded', UI.displayBook);
// document.querySelector('#form-book').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var title = document.querySelector('#title').value;
//     var author = document.querySelector('#author').value;
//     var isbn = document.querySelector('#isbn').value;
//     if (title === '' || author === '' || isbn === '') {
//         UI.showAlert('please fill in all fields', 'danger')
//     } else {
//         var book = new Book(title, author, isbn);
//         UI.addBookToList(book);
//         Store.addBook(book);
//         UI.clearFields();
//         UI.showAlert('book added', 'success')
//     }
// });

// document.querySelector('#book-list').addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete')) {
//         UI.deleteBook(e.target);
//         Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
//     }
// });




class Store {
     getBooks() {
       let books = [];
       let data = sessionStorage.getItem('BOOKS')
       if(data) books = JSON.parse(data)
       return books
    }
     addBook(book) {
        let books = this.getBooks()
        books.push(book)
        sessionStorage.setItem('BOOKS',JSON.stringify(books))
    }
     removeBook(element) {
        //   let isbn = element.childNodes[2].innerText
        let isbn = element.children[2].innerText
          console.log(isbn)
          let books = this.getBooks()
        //   books.forEach((item,index)=>{
        //       if(item.isbn == isbn){
        //         books.splice(index,1)
        //       }
        //   })
          books = books.filter(item=> item.isbn != isbn)
          sessionStorage.setItem('BOOKS',JSON.stringify(books))
    }
}

class Book {
    constructor (title,author,isbn) {
        this.title = title 
        this.author = author 
        this.isbn = isbn
    }
}

class UI {
    checkStore =()=> {
        let books = store.getBooks()
        books.forEach(book =>this.addBook(book))
    }
     addBook =(book)=>{
        let {title,author,isbn} = book
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class='btn btn-danger delete' >x</button></td>
        `
        let tbody = document.querySelector('#book-list')
        tbody.appendChild(tr)
    }
    removeBook(element) {
        element.remove()        
    }
    clearBook(book){
        Object.keys(book).forEach(item=>{
            document.getElementById(item).value = ''
        })
    }
    alertBook(message,className) {
        let container = document.querySelector('.container')
        let form = document.querySelector('form')
        let div = document.createElement('div')
        div.className = `alert alert-${className} disappear`
        div.appendChild(document.createTextNode(message))
        container.insertBefore(div,form)
        setTimeout(()=>{document.querySelector('.alert').remove()},1000)
    }
}

function arg() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let isbn = document.querySelector('#isbn').value
    return [title,author,isbn]
}

let ui = new UI()
let store = new Store()

document.addEventListener('DOMContentLoaded',ui.checkStore)

document.querySelector('#form-book').addEventListener('submit',(e)=>{
    e.preventDefault()
    let book = new Book(...arg())
    let { title,author,isbn } = book
    console.log(title)
    if(!title || !author || !isbn){
        ui.alertBook('field required','danger')
    } else {
        ui.alertBook('book added','success')
        ui.addBook(book)
        store.addBook(book)
        ui.clearBook(book)
    }
})

document.querySelector('#book-list').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')) {
        let element = e.target.parentElement.parentElement
        ui.removeBook(element)
        store.removeBook(element)
    }
})

