interface Person{  // 接口，类似于对象变量的 预声明
    firstName : string;
    lastName : string;
}

function greeter ( obj: Person){ // obj: Person obj的格式必选符合Person对象的参数
    return `haha${obj.firstName}${obj.lastName}`
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);


let d : {name: string}
d={
    name:'hahaha',
}

let list1 : number[] = [1,2,3,4,5] // number[] 数组内容为数字类型
let list2 : Array<any> = [1,2,3,4,'sdf']  // Array<any> 数组内容为任意类型
let list3 : [number,string] = [4,'f',] // [number,string] 数组内容为 第一个为数字类型 第二个为字符串

let haha: any = 4 // : any 任意类型

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
