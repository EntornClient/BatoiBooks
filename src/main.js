import './style.css'
import {
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
}from './functions'

import data from './services/datos'

document.querySelector('#app').innerHTML = `
<div>
    
    <img src="public/logoBatoi.png" class="logo" alt="Batoi logo" />
    <header>BatoiBooks</header>
    <p>Abre la consola para ver el resultado</p>
</div>
`
console.log(booksFromUser(books, 4));
const librosModulo = booksFromModule(books, 5021);
console.log(booksWithStatus(librosModulo, "good"));
console.log(incrementPriceOfbooks(books, 0.1));