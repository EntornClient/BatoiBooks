import User from "./user.class.js";
export default class Users{
    constructor(){
        this.data = [];
    }

    populate(usuarios){
        usuarios.forEach(usuario => {
            let usuarioAIntroducir = new User(usuario.id, usuario.nick, usuario.email, usuario.password);
            this.data.push(usuarioAIntroducir);
        });

        
    }

    addUser(user){
        const usuari = new User(user.id, user.nick, user.email, user.password);
        this.data.push(usuari);
        return usuari;
    }

    removeUser(id){
        const arrayUsuarioEliminado = this.data.filter(usuario => usuario.id != id);
        if(arrayUsuarioEliminado.length === this.data.length){
            throw new Error("Usuario no existente");
        }else{
            this.data = usuarioEliminado;
        }
    }

    changeUser(user){
        const idUser = user.id;
        removeUser(isUser);
        this.data.push(user);
    }

    toString(){
        
    }
}

