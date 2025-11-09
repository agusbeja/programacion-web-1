export class FormularioLogin {
    constructor(username, password){
        this._username = username;
        this._password = password;
    }

    get usuario(){
        return this._username;
    }

    get password(){
        return this._password;
    }

    esValido(){
        return (this._username != "aaa" && this._password != "123") && (this._username != "" && this.password != "");
    }
    
}