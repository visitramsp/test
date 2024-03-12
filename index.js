const express=require("express")
const appFolder=require("./app")
const app=express()
app.listen(()=>{
    console.log("server start");
    appFolder()
})