// class

class Users {
    name:string
    age:Number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    setName(newName:string){
        this.name = newName
        console.log( this.name)
    }
}

let hahaha = new Users('ding',24)

hahaha.setName('gao')