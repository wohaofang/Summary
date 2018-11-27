// 函数

//剩余参数
function buildName(val1:string,...valR:string[]){
     console.log(val1 + " " + valR.join(" "))
}

buildName('a','haha','lala')


// 泛型

/** 未用泛型 */ 
function identity(arg: number): number {  // return 值必须是number
     return arg;
 }

 /** 使用泛型 */ 
 function identity2<T>(val: T): T{ // 添加了类型变量T
     console.log(val)
     return val
 }

 identity2<string>('hahaah') // 泛型 必须都是 字符串类型


 // 枚举

 // 数字枚举
 enum Direction {
     Up = 1,
     Down,
     Left,
     Right
 }
 //如上，我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。

 enum Responses {
     No = 0,
     Yes = 1,
 }
 
 function respond(recipient: string, message: Responses): void {
     console.log(message) // 1
 }
 
 respond("Princess Caroline", Responses.Yes)