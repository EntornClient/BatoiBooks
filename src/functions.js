function getBookById(books, bookId){
    const book = books.find(libro=>libro.id===bookId);
    if(!book){
        throw new Error();
    };
    return book;
}

function getBookIndexById(books, bookId){
    const book = books.findIndex(libro=>libro.id===bookId);
    if(book===-1){
        throw new Error('error');
    }
    return book;
}

function bookExists(books, userId, moduleCode){
    const book = books.find(libro=>libro.userId===userId && libro.modeuleCode===moduleCode);
    if(!book){
        return false;
    }else{
        return book;
    }
}
function booksFromUser(books, userId){
    const book = books.filter(libro=>libro.userId === userId);
    return book;
}
function booksFromModule(books, moduleCode){
    const book = books.filter(libro=>libro.moduleCode === moduleCode);
    return book;
}
function booksCheeperThan(books, price){
    const book = books.filter(libro=>libro.price <= price);
    return book;
}
function booksWithStatus(books, status) {
    const book = books.filter(libro=>libro.status === status);
    return book;
}
function averagePriceOfBooks(books) {
    const book = books.reduce((acum, libro) => acum + libro.price) / books.length;
    return book.toString() + "€";
}
function booksOfTypeNotes(books){
    const book = books.filter(libro=>libro.publisher === "Apunts");
    return book;
}
function booksNotSold(books) {
    const book = books.filter(libro=>libro.soldDate === "");
    return book;
}
function incrementPriceOfbooks(books, percentage){
    return books.map(book => ({
    ...book, price: book.price * (1 + percentage)
    }));
}
function getUserById(users, userId) {

}
function getUserIndexById(users, userId){

}
function getUserByNickName(users, nick){

}
function getModuleByCode(modules, modeuleCode){

}

export {
  getBookById,
  getBookIndexById,
  bookExists,
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNotes,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode 
}