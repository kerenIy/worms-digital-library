//javascript code for book library

//code to grab the html elements from the html document
const addBook = document.getElementById('add-book');
const catalog = document.getElementById('catalog');
const showForm = document.getElementById('display-form')
const bookForm = document.getElementById('book-form');

//this grabs the input field for the form details
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById('bookAuthor');
const bookImg = document.getElementById('book-img');
const bookStatus = document.getElementById('status');
const bookRating = document.getElementById('rating');

//code for when the add book button is clicked
addBook.addEventListener('click', function(){

    //this defines an object Book with the same properties from the form
    const Book = {

        //sets the value to whatever is typed on the form
        name: bookName.value,
        author: bookAuthor.value,
        img: bookImg.value,
        status: bookStatus.value,
        rating: bookRating.value,
    }
    
    console.log(Book);

    //creates html elements and adds corresponding styles
    const name = document.createElement("p");
    name.classList.add('name');

    const author = document.createElement("p");
    author.classList.add('author');

    const img = document.createElement("img");
    img.classList.add('book-img');

    const bookItem = document.createElement("div")
    bookItem.classList.add('bookItem');

    const status = document.createElement("p");
    status.classList.add('status');

    const rating = document.createElement("p");
    rating.classList.add('rating');

    //sets the values to whatever is stored in the Book object
    name.innerHTML = Book.name;
    author.innerHTML = Book.author;
    img.src = Book.img
    status.innerHTML = Book.status;
    rating.innerHTML = Book.rating;

    //appends the values to the html div
    bookItem.append(img, name, author, status, rating);

    //appends the div to the html div
    catalog.appendChild(bookItem)

    //calls the function to clear the input tabs
    clearForm();
})

//code for when the add button is clicked
showForm.addEventListener('click', function(){
    
    //removes the hide class on the form, makes it show
    bookForm.classList.remove('hide');
})

//function to clear the input tabs
function clearForm(){
    bookName.value = " ";
    bookAuthor.value = " ";
    bookImg.value = " ";
    bookStatus.value = " ";
    bookRating.value = " ";
}


//code that connects to the database is database.js