const fs = require('fs')
const path = require('path')
const pages = require('./pages')


// 主函数
async function main() {
    // console.log(process.argv[2],pages)
    let obj = await create(process.argv[2])
    console.log(obj)
    if(obj){
       let json = {...pages,...obj}
       let str = `module.exports =${JSON.stringify(json)}`
       fs.writeFile(path.resolve('./pages.js'),str,(err)=>{
           if (err) throw err
           console.log('>>>>>>>>>>>>>成功')
       })
    }
}

main()

// 设置路径
async function create(name) {
    let res1 = await createFile(
        `./router/${name}/`,
        'router.js',
        `/${name}`,
        `${name}.js`
    )
    let res2 = await createFile(
        `./entry/${name}/`,
        'entry.js',
        `/${name}`,
        `${name}.js`
    )
    // console.log(res1,res2)
    if(res1 && res2){
        let obj = {}
        obj[name] = `${name}`
        return obj
    }
}

// 输出文件
async function createFile(file_path,files,createName,name) {
    return new Promise((resolve,reject)=>{
        fs.mkdir(path.resolve(file_path),(err)=>{
            if (err) return reject(err)
            fs.readFile(path.resolve('./templates/'+files),(errr,data)=>{
                if(errr) return reject(errr)
                    let json = data.toString().replace(/<%=.*%>/gi, createName)
                    fs.writeFile(path.resolve(file_path,name),json,(err)=>{
                        if(err) return reject(err)
                        resolve(true)
                    })
            })
        })
    })
}



