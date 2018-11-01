const fs = require('fs')

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if(err){
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}
const processaArquivos = async() => {
    const file1 = await readFile('test1.js')
    console.log('file1', file1)
    try{
        const file2 = await readFile('test2.js')
        console.log('file2', file2)
    }catch(err){
        console.log('file2 err', err)
    }
}
processaArquivos()