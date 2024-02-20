import simpleGit from "simple-git";
import { generateId } from "./utils/generateID";
import express from "express";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello")
})
app.post('/deploy',async(req:any,res:any)=>{
    const repoUrl=req.body.repoUrl
    const id = generateId();
    await simpleGit().clone(repoUrl,`output/${id}`)
    res.send({
        id
    })
})

app.listen(3000,()=>{
    console.log("Listening on 3000")
})