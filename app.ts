const express = require ("express");
const app = express();

app.get('/',(req,res)=> {
    res.send('bem vindo ao meu servidor')
})

const porta = 3000
app.listen(porta,()=>{
    console.log(`servidor rodando em http://localhost: ${porta}`);
})