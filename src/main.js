import './style.css'
import Controller from './controller/controller.class.js';



import { getDBUsers, getDBBooks, getDBModules, getDBUser, addDBUser, addDBBook , removeDBBook, changeDBBook, changeDBUserPassword } from './services/api'



document.querySelector('#app').innerHTML = `
<div>
    
    <img src="public/logoBatoi.png" class="logo" alt="Batoi logo" />
    <header>BatoiBooks</header>
    <nav>
        <ul>
            <li><a href="#list">Ver Libros</a></li>
            <li><a href="#form">Añadir Libro</a></li>
            <li><a href="#about">Acerca de...</a></li>
        </ul>
    </nav>
</div>
<div id="messages"></div>
    <div>
        <div id="list"></div>
    </div>

    <div id="form">
    <form id="formulari">
        <h3 id="formTitle">Añadir libro</h3>
        <div id="id-libro" style="display: none;">
            <label for="id_libro_oculto">ID del Libro: </label>
            <input type="text" id="id_libro_oculto" name="id_libro">
        </div>
        <div>
            <label for="module-code">moduleCode: </label>
            <select name="moduleCode" id="module-code" required>
                <option value="" id="select">tria el modul:</option>
            </select>
        </div>

        <div>
            <label for="publisher">publisher: </label>
            <input type="text" id="publisher" name="publisher">
        </div>

        <div>
            <label for="price">Precio: </label>
            <input type="number" name="price" min="0" id="price" required>
        </div>

        <div>
            <label for="pages">Paginas: </label>
            <input type="number" name="pages" id="pages" min="0" step="1" required>
        </div>
        
        <div>
            <p>Status: </p>
            <input type="radio" id="status-good" name="status" value="good" required>
            <label for="status-good">good</label>

            <input type="radio" id="status-bad" name="status" value="bad">
            <label for="status-bad">bad</label>
        </div>

        <div>
            <label for="comments">comentarios: </label>
            <textarea name="comments" id="comments"></textarea> 
        </div>

        <div>
            <label for="soldDate">Fecha de venta: </label>
            <input type="date" name="soldDate" id="soldDate">
        </div>

        <div>
            <button type="submit" id="btn-submit">Guardar Libro</button>
        </div>
    </form>
    </div>
    <br>
    <div id="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente illum corrupti repellendus! Ad natus quod ullam quibusdam, cum perspiciatis iste ex est inventore doloribus. Tempore sit harum beatae assumenda.</p>
    </div>
</div>
`
document.addEventListener('DOMContentLoaded', () => {
    const myController = new Controller();
    myController.init()
})

