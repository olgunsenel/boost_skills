class Trainee{
    static #id = 4000;
    #email;
    constructor(name, email, path) {
        this.name = name;
        this.email = email;
        this.path = path;
        this.stNumber = `F -` + Trainee.#id;
        Trainee.#id++;
    }
    skils(){
        return `Can work in IT world`;
    }
    getSummary(){
        return this.stNumber + ` ` + this.name
    }
    getMail(){
        return this.#email;
    }
    setMail(email){
        this.#email = email;
    }
}

class FS extends Trainee{
    constructor(name, email, path, title){
        super(name, email, path);
        this.title = title
    }

    skils(title){
        return this.name + title + `can work`;
    }
}

const fs1 = new FS