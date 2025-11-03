(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();let d=class{constructor(e){this.id=e.id,this.userId=e.userId,this.moduleCode=e.moduleCode,this.publisher=e.publisher,this.price=e.price,this.pages=e.pages,this.status=e.status,this.photo=e.photo||"",this.comments=e.comments||"",this.soldDate=e.soldDate||""}toString(){return this.id+", "+this.userId+", "+this.moduleCode+", "+this.publisher+", "+this.price+", "+this.pages+", "+this.status+", "+this.photo+", "+this.comments+", "+this.soldDate}};const i="http://localhost:3000";async function c(){try{const s=await fetch(i+"/users");if(!s.ok)throw`Error ${s.status} de la BBDD: ${s.statusText}`;return await s.json()}catch(s){console.log(s)}}async function l(){try{const s=await fetch(i+"/modules");if(!s.ok)throw`Error ${s.status} de la BBDD: ${s.statusText}`;return await s.json()}catch(s){console.log(s)}}async function u(){try{const s=await fetch(i+"/books");if(!s.ok)throw`Error ${s.status} de la BBDD: ${s.statusText}`;return await s.json()}catch(s){console.log(s)}}async function h(s){try{const e=await fetch(i+"/users/"+s);if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}catch(e){console.log(e)}}async function p(s){try{const e=await fetch(i+"/users",{method:"POST",body:JSON.stringify(s),headers:{"Contennt-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}catch(e){console.log(e)}}async function m(s){try{const e=await fetch(i+"/books",{method:"POST",body:JSON.stringify(s),headers:{"Contennt-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}catch(e){console.log(e)}}async function b(s){try{const e=await fetch(i+"/books/"+s,{method:"DELETE",body:JSON.stringify(s),headers:{"Contennt-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}catch(e){console.log(e)}}async function g(s){try{const e=await fetch(i+"/books/"+s.id,{method:"PUT",body:JSON.stringify(s),headers:{"Contennt-Type":"application/json"}});if(!e.ok)throw`Error ${e.status} de la BBDD: ${e.statusText}`;return await e.json()}catch(e){console.log(e)}}async function y(s,e){try{const t=await fetch(i+"/users/"+s,{method:"PATCH",body:JSON.stringify({password:e}),headers:{"Content-Type":"application/json"}});if(!t.ok)throw`Error ${t.status} de la BBDD: ${t.statusText}`;return await t.json()}catch(t){console.log(t)}}class f{constructor(){this.data=[]}async populate(){(await u()).forEach(t=>{let o=new d(t);this.data.push(o)})}async getBook(e){return await getDBBook(e)}async addBook(e){return await m(e)}async changeBook(e){return await g(e)}getBookIndexById(e){const t=this.data.findIndex(o=>o.id===e);if(t===-1)throw new Error("Book not found");return t}async removeBook(e){await b(e);const t=this.getBookIndexById(e);this.data.splice(t,1)}toString(){}}class w{constructor(e,t,o,r){this.code=e,this.cliteral=t,this.vliteral=o,this.courseId=r}toString(){return this.code+", "+this.cliteral+", "+this.vliteral+", "+this.courseid}}class v{constructor(){this.data=[]}async populate(){(await l()).forEach(t=>{let o=new w(t.code,t.cliteral,t.vliteral,t.courseId);this.data.push(o)})}}class B{constructor(e,t,o,r){this.id=e,this.nick=t,this.email=o,this.password=r}toString(){return this.id+", "+this.nick+", "+this.email+", "+this.password}}class k{constructor(){this.data=[]}async populate(){(await c()).forEach(t=>{let o=new B(t.id,t.nick,t.email,t.password);this.data.push(o)})}async getUser(e){return await h(e)}async addUser(e){return await p(e)}async removeUser(e){return await removeDBUser(e)}async changeUser(e){return await changeDBUser(e)}async changeUserPassword(e,t){return await y(e,t)}toString(){}}class D{constructor(){this.messages=document.getElementById("messages"),this.lista=document.getElementById("list")}renderModulos(e){e.forEach(t=>{const o=document.createElement("option");o.value=t.vliteral,o.innerHTML=t.code,document.getElementById("select").append(o)})}renderBook(e){const t=document.createElement("div");t.className="card",t.id=`book-${e.id}`,t.innerHTML="<h3>libro: "+e.id+"</h3><br><h3>"+e.moduleCode+"</h3><p>"+e.publisher+"</p><br><p>"+e.pages+" paginas</p><br><p>Estado: "+e.status+"</p><br><p>vendido en: "+e.soldDate+"</p><br><p>"+e.comments+"</p><br><p>"+e.price+"€</p>",this.lista.append(t)}removeBook(e){document.getElementById(e).remove()}renderMessage(e,t){const o=document.createElement("div");o.innerHTML=`${t}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>`,this.messages.append(o)}}class E{constructor(){this.view=new D,this.users=new k,this.books=new f,this.modules=new v}handlerSubmitBook(e){const t=new Book(e.id,e.userId,e.moduleCode,e.publisher,e.price,e.pages,e.status);this.books.addBook(t),this.view.renderBook(t)}async handleRemoveBook(e){try{await this.books.removeBook(e),this.view.removeBook(e)}catch(t){this.view.renderMessage("error al eliminar libro"+t)}}async init(){try{document.getElementById("btn-remove").addEventListener("click",()=>{alert("boton pulsado")}),await Promise.all([this.books.populate(),this.users.populate(),this.modules.populate()])}catch(e){this.view.renderMessage("error","error"+e)}this.view.renderModulos(this.modules.data),this.books.data.forEach(e=>{this.view.renderBook(e)})}}document.querySelector("#app").innerHTML=`
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
        <div id="remove">
        <label for="remove-id">ID a Borrar: </label>
        <input type="number" name="id-to-remove" id="remove-id">
        <button type="button" id="btn-remove">borrar libro</button>
    </div>

    <div id="form">
        <div>
            <label for="book-userId">userId: </label>
            <input type="number" name="userId" id="book-userId" required>
        </div>

        <div>
            <label for="book-moduleCode">moduleCode: </label>
            <select name="moduleCode" id="book-moduleCode" required>
                <option value="" id="select">tria el modul:</option>
            </select>
        </div>

        <div>
            <p>publisher: </p>
            <input type="radio" id="Apunts-radio" name="publisher" value="apunts" required>
            <label for="Apunts-radio">Apunts</label>

            <input type="radio" id="McGraw-Hill-radio" name="publisher" value="McGraw-Hill">
            <label for="McGraw-Hill-radio">McGraw-Hill</label>
        </div>

        <div>
            <label for="book-price">Precio: </label>
            <input type="number" name="price" id="book-price" required>
        </div>

        <div>
            <label for="book-pages">Paginas: </label>
            <input type="number" name="pages" id="book-pages" required>
        </div>
        
        <div>
            <p>Status: </p>
            <input type="radio" id="status-good" name="status" value="good" required>
            <label for="status-good">good</label>

            <input type="radio" id="status-bad" name="status" value="bad">
            <label for="status-bad">bad</label>
        </div>

        <div>
            <label for="book-comments">comentarios: </label>
            <textarea name="comments" id="book-comments" required></textarea> 
        </div>

        <div>
            <label for="book-soldDate">Fecha de venta: </label>
            <input type="date" name="soldDate" id="book-soldDate" required>
        </div>

        <div>
            <button type="submit" id="btn-submit">Guardar Libro</button>
        </div>

    </div>
    <br>
    <div id="about">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente illum corrupti repellendus! Ad natus quod ullam quibusdam, cum perspiciatis iste ex est inventore doloribus. Tempore sit harum beatae assumenda.</p>
    </div>
</div>
`;document.addEventListener("DOMContentLoaded",()=>{new E().init()});
