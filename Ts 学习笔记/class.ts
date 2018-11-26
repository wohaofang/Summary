// 类
class Demo {
    greeting: string; // greeting的属性
    private _name: string //  _name 是个私人的
    static print () { // 静态的
        console.log('static method')
    }
    constructor(message:string){
        this.greeting = message
    }
    greet(val?) { //val? 参数val可有可无
        console.log('haha' + this.greeting+'0000'+val)
    }
}
let ha = new Demo('dingming')

console.log(ha.greet())

class Demo2 extends Demo{  // 继承
    bark() {
        return 'haha' + this.greeting
    }
}

let ha2 = new Demo2('lala')

console.log(ha2.greet(),ha2.bark())

class DD extends Demo{
    constructor(message:string){
        super(message)
    }
    greet(val = 5){
        super.greet(val)  // super可以调用派生的方法
    }
}

let DD1 = new DD('llll')
DD1.greet(5555)
