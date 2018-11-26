// 类

class Demo {
    greeting: string;
    constructor(message:string){
        this.greeting = message
    }
    greet(val?) {
        console.log('haha' + this.greeting+'0000'+val)
    }
}
let ha = new Demo('dingming')

console.log(ha.greet())

class Demo2 extends Demo{
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
        super.greet(val)
    }
}

let DD1 = new DD('llll')
DD1.greet(5555)
