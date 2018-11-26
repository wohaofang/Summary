interface Person{
    firstName : string;
    lastName : string;
}

function greeter ( obj: Person){
    return `haha${obj.firstName}${obj.lastName}`
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);


let d : {name: string}
d={
    name:'hahaha',
}

let list1 : number[] = [1,2,3,4,5]
let list2 : Array<any> = [1,2,3,4,'sdf']
let list3 : [number,string] = [4,'f',]

let haha: any = 4

let fn: (id: string) => number = function (id) {
    return 1
}

fn('f')

class User {
    id?: number | string
    name?: string
}

let haha1: User = {id:1,}
let haha2: User = {id:'f'}

interface Point {
    haha:string;
    readonly haha1:any
}

let haha3 :Point = {haha:'2',haha1:2}
haha3.haha = '5'
