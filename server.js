/*
 * @Author: dong 2710732812@qq.com
 * @Date: 2022-05-15 18:57:49
 * @LastEditors: dong 2710732812@qq.com
 * @LastEditTime: 2022-05-16 10:15:28
 * @FilePath: \hot_reload\server.js
 */
const express = require('express')
const fs = require('fs')
const expressWs = require('express-ws')

const app = new express()

expressWs(app)

app.use(express.static('./public'))

let wsRes = null

app.ws("/socketTest",(ws,req)=>{
    wsRes = ws 
    // ws.on('message',(msg)=>{
    // })
})

fs.watch('./public',{recursive:true},(type,path)=>{
    if(type === 'change'){
        console.log('change')
        wsRes?.send(
            JSON.stringify({
                path
            })
        )
    }
})

// app.get('',(req,res)=>{
//     const html = fs.readFileSync('./public/index.html')
//     res.send(html.toString())
// })

app.listen(3000,(res,rej)=>{
    console.log('3000 ok')
})
