import Book from "./book.class";

export default class Cart{
    constructor(){
        this.data = [];
    }

    populate(){

    }

    getBookById(id){
        this.data.forEach(libro => {
            if(libro.id === id){
                return libro;
            }
        });
        return {};
    }

    addItem(book){
        const copiaLibro = new Book(book);
        this.data.push(copiaLibro);
    }

    removeItem(id){
                const nuevoArray = this.data.filter(function(libro){
                    return libro.id != id;
                });
            this.data = nuevoArray;
    }

    toString(){
        if (this.data.length === 0) {
            return "El carrito está vacío.";
        }

        var itemsString = this.data.map(function(libro) {
            return "  * ID: " + libro.id + " - Module code:  " + (libro.moduleCode);
        }).join('\n'); 

        return "Carrito (" + this.data.length + " artículo(s)):\n" + itemsString;
    }
}
