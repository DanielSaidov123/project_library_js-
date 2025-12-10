import { sampleBooks } from "../data/storage.js";
function addBook(bookData) {
  sampleBooks.push(bookData);
}

function getAllBooks() {
  return sampleBooks;
}

function findBookById(bookId) {
  for (let i = 0; i < sampleBooks.length; i++) {
    if (sampleBooks[i].id == bookId) {
      return sampleBooks[i];
    }
  }
  return "not find";
}

function deleteBook(bookId) {
  for (let i = 0; i < sampleBooks.length; i++) {
    if (sampleBooks[i].id == bookId) {
      sampleBooks.splice(i, 1);
    }
  }
}

function searchBooks(searchTerm) {
  for (let i = 0; i < sampleBooks.length; i++) {
    if (sampleBooks[i].title == searchTerm) {
       return sampleBooks[i]
    }
  }
  return 'is not faund'
}

function getAvailableBooks(){ 
    const arr=[]
    for (let i = 0; i <sampleBooks.length ; i++) {
        if(sampleBooks[i].availableCopies>0){
            arr.push(sampleBooks[i])
         }
     }
     return arr
} 

function getBorrowedBooks(){

 } 

function sortBooks(criteria){ 
    sampleBooks.sort((a, b) => {
  if (a.criteria < b.criteria) {
    return -1;
  }
  if (a.criteria > b.criteria) {
    return 1;
  }

  return 0;
});
return sampleBooks
} 

function getMostPopularBooks(limit){ } 

function getBooksByCategory(category){ 
    const arr=[]
    for (let i = 0; i <sampleBooks.length ; i++) {
        if(sampleBooks[i].category===category){
            arr.push(sampleBooks[i])
         }
     }
     return arr
} 


function getCategoryStats(){
  const obg={}
   for (let i = 0; i <sampleBooks.length ; i++) {
        if(sampleBooks[i].category in obg){
          obg[sampleBooks[i].category]++
        }
        else{
           obg[sampleBooks[i].category]=1
        }
    }
    return obg
 } 

console.log(getCategoryStats());
