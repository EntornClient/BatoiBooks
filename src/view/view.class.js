import Modules from "../model/modules.class.js";

export default class View {

    
    constructor() {
        this.messages = document.getElementById("messages");
        this.formTitle = document.getElementById("formTitle");
        this.lista = document.getElementById("list");
        this.bookForm = document.getElementById("formulari");
        this.idLibro = document.getElementById("id-libro");
        this.moduleCode = document.getElementById('module-code');
        this.publisher = document.getElementById('publisher');
        this.price = parseFloat(document.getElementById('price'));
        this.pages = parseInt(document.getElementById('pages'));
        this.status = this.bookForm.querySelector('input[name="status"]:checked');
        this.comments = document.getElementById('comments');
        this.soldDate = document.getElementById("soldDate");
        this.erroresContainer = document.getElementById('errores-generales');

    }

    renderModulos(modulos){
        modulos.forEach(modulo => {
            const newOption = document.createElement('option')
            newOption.innerHTML = modulo.vliteral;
            newOption.value = modulo.code;
            document.getElementById('module-code').append(newOption);
        });
    }

    renderBook(book){
        try{
        const newDiv = document.createElement('div');
        newDiv.className = "card"
        newDiv.id = book.id;
        newDiv.innerHTML = "<h3>" + "libro: " + book.id + "</h3>" + "<br>" + "<h3>" + book.moduleCode + "</h3>" +
        "<p>" +  book.publisher + "</p>" + "<br>" + "<p>" + book.pages + " paginas" + "</p>" + "<br>" + 
        "<p>Estado: " + book.status + "</p>" + "<br>" + "<p>" + this.renderData(book.soldDate) + "</p>" + "<br>" + 
        "<p>" + book.comments + "</p>" + "<br>" + "<p>" + book.price + "€</p>" + 
        "<br>" + `<button class="addCart"> <span class="material-icons">add_shopping_cart</span> </button>` +
        `<button class="edit"> <span class="material-icons">edit</span> </button>` +
        `<button class="btn-remove"> <span class="material-icons">delete</span> </button>`
        ;
        this.lista.append(newDiv);
        }catch(error){
            this.renderMessage("error al renderizar los libros" + error);
        }
    }

    renderData(fecha){
        if(fecha!=""){
            return fecha.toLocaleString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
        }else{
            return "No se ha vendido";
        }
    }

    removeBook(id){
        document.getElementById(id).remove();
    }

    renderMessage(type, message){
        const newMessage = document.createElement("div");
        newMessage.innerHTML =  `${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>`
        this.messages.append(newMessage);
        setTimeout(() => {
        newMessage.remove();
        }, 3000);
    }

    getFormBookData() {
        return {
            userId: 2,
            moduleCode: document.getElementById('module-code').value,
            publisher: document.getElementById('publisher').value,
            price: parseFloat(document.getElementById('price').value),
            pages: parseInt(document.getElementById('pages').value),
            status: this.bookForm.querySelector('input[name="status"]:checked')?.value,
            comments: document.getElementById('comments').value,
            soldDate: document.getElementById("soldDate").value,
        }
    }

    populateBooks(book){
        this.formTitle.value = "Editar video";
        this.idLibro.value = book.id;
        this.moduleCode.value = book.moduleCode;
        this.publisher.value = book.publisher;
        this.price.value = book.price;
        this.pages.value = book.pages;
        this.status.value = book.status;
        this.comments.value = book.comments;
        this.soldDate.value = book.soldDate;
    }

    clearValidationErrors() {
        const erroresContainer = document.getElementById('errores-generales');
        
        if (erroresContainer) {
            erroresContainer.innerHTML = '';
        }
        
        const formulario = document.getElementById('formulari');
        const camposConError = formulario.querySelectorAll('.campo-error');
        
        camposConError.forEach(campo => {
            campo.classList.remove('campo-error');
        });
    }

    displayValidationErrors(errores) {
        if (!this.erroresContainer) return; 
        const lista = document.createElement('ul');
        lista.style.color = 'red';
        lista.style.listStyleType = 'disc';
        lista.style.paddingLeft = '20px';
        
        errores.forEach(errorMensaje => {
            const item = document.createElement('li');
            item.textContent = errorMensaje;
            lista.appendChild(item);
        });

        this.erroresContainer.appendChild(lista);
        this.erroresContainer.style.border = '1px solid red';
        this.erroresContainer.style.padding = '10px';
    }

    validateForm(){
        const formulario = this.bookForm;
        const campos = formulario.querySelectorAll('[required], input[type="number"]');
        let errores = [];
        
        this.clearValidationErrors(); 

        campos.forEach(campo => {
            campo.classList.remove('campo-error');
            
            if (!campo.checkValidity()) {
                campo.classList.add('campo-error');
                
                const mensaje = `${campo.name}: ${campo.validationMessage}`;
                errores.push(mensaje);
            }
        });

        if (errores.length > 0) {
            this.displayValidationErrors(errores); 
            return false;
        }
        
        return true;
    }
}