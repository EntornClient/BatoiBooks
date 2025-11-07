import View from '../view/view.class'
import Books from '../model/books.class';
import Users from '../model/users.class';
import Modules from '../model/modules.class';
import Cart from '../model/cart.class';


export default class Controller{
    constructor(){
        this.view = new View();
        this.users = new Users();
        this.books = new Books();
        this.modules = new Modules();
        this.cart = new Cart();

    }

    async handlerSubmitBook(book){
        try{
        const newBook = await this.books.addBook(book);
        this.view.renderBook(newBook);
        this.view.renderMessage("info", "libro creado correctamente");
        }catch(error){
            this.view.renderMessage("error", "error al crear el libro" + error)
        }
    }

    async handleRemoveBook(id){
        try{
        await this.books.removeBook(id);
        this.view.removeBook(id);
        }catch(error){
            this.view.renderMessage("error al eliminar libro");
        }
    }
    
async init(){
    try{
        
        await Promise.all([
            this.books.populate(),
            this.users.populate(),
            this.modules.populate()
        ])
    }catch(error){
        this.view.renderMessage("error", "error" + error)
    }
    this.view.renderModulos(this.modules.data);
    this.books.data.forEach(book => {
        this.view.renderBook(book);
    });
    this.view.bookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newBook = this.view.getFormBookData();
        this.handlerSubmitBook(newBook);
    })


    Array.from(document.getElementsByClassName("btn-remove")).forEach(boton =>{
        boton.addEventListener("click", ()=>{
            const eliminar = confirm("Segur que vols eliminar el lilbre?");
            if(eliminar == false){
                return;
            }
            const divLibro = boton.parentElement;
            const idLibro = divLibro.id;
            this.handleRemoveBook(idLibro);
        })
    })



    Array.from(document.getElementsByClassName("addCart")).forEach(cart => {
        cart.addEventListener("click", ()=>{
            const divLibro = cart.parentElement;
            const idLibro = divLibro.id;
            this.cart.addItem(idLibro);
            this.view.renderMessage("info", "libro añadido a el carrito correctamente!");
        })
    })
        
}
}



