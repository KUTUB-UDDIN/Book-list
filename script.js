const Title = document.getElementById('title');
const Author = document.getElementById('author');
const Year = document.getElementById('year');
const Button = document.getElementById('btn');
const bookList = document.getElementById('book-list');


// Button handle
Button.addEventListener('click',function(event){  

    //    error handaling
  if (Title.value == "" && Author.value == "" &&Year.value=="") {
    alert("full fill the from");
}else{
  //   creating new row
   const newRow = document.createElement('tr');

  // creating new title
  const newTitle = document.createElement('th');
  newTitle.innerHTML = Title.value;
  newRow.appendChild(newTitle);
// creating new author 
 const newAuthor = document.createElement('th');
 newAuthor.innerHTML = Author.value;
 newRow.appendChild(newAuthor);
// creating new  year
const newYear = document.createElement('th');
newYear.innerHTML = Year.value;
newRow.appendChild(newYear);
//   ui represent
bookList.appendChild(newRow);
//
event.preventDefault();

  
 }  
})