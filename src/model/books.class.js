import Book from "./book.class.js";
import {getDBBooks, addDBBook , removeDBBook, changeDBBook} from '../services/api.js'

export default class Books{
    constructor(){
        this.data = [];
    }

    async populate(){
        const books = await getDBBooks();
        books.forEach(book => {
            let libroAIntroducir = new Book(book);
            this.data.push(libroAIntroducir);
        });
    }

    async getBook(id){
        const returnedBook = getDBBook(id);
        return returnedBook;
    }

    async addBook(book){
        const bookAdd = addDBBook(book);
        return bookAdd;
    }

    async changeBook(book){
        const bookchanged = changeDBBook(book);
        return bookchanged;
    }

    async removeBook(id){
        const removedBok = removeDBBook(id);
        return removedBok;
    }

    toString(){
        
    }
}

