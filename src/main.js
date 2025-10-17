import './style.css'
import Books from "./model/books.class.js";
import Modules from "./model/modules.class.js";
import Users from "./model/users.class.js";



import { getDBUsers, getDBBooks, getDBModules, getDBUser, addDBUser, addDBBook , removeDBBook, changeDBBook, changeDBUserPassword } from './services/api'

document.querySelector('#app').innerHTML = `
<div>
    
    <img src="public/logoBatoi.png" class="logo" alt="Batoi logo" />
    <header>BatoiBooks</header>
    <p>Abre la consola para ver el resultado</p>
</div>
`
let modules = new Modules();
modules.populate();
let users = new Users();
users.populate();
let books = new Books();
books.populate;