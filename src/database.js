import sqlite3 from 'sqlite3'


export const db=new sqlite3.Database('./db.sqlite')

export const getSql=(query)=>{
    console.log('getSql',query)
    return new Promise((resolve,reject)=>{
        db.all(query.text,query.values,(err,rows)=>{
            if(err){
                reject(err)
            }else{
                console.log('rows',rows)
                resolve(rows)
            }
        })
    })
}