// 函数

//剩余参数
function buildName(val1:string,...valR:string[]){
     console.log(val1 + " " + valR.join(" "))
}

buildName('a','haha','lala')