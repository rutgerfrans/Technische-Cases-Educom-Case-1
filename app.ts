import express from "express";

const app = express()


app.listen({port: 4000}, ()=> {
    console.log('server running')
})

app.get('/', (_req,res) =>{
    res.sendFile(__dirname+"/index.html");
})

// const GetAPI = async(url: string) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }


