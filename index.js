import express from 'express';
import {montadoras, veiculos} from "./dados.js";

const app = express();

app.get('/veiculos', (req, res) => {
    res.json(veiculos)
})

app.get('/montadoras', (req, res) => {
    res.json(montadoras);
})
const PORT = 3030
app.listen(PORT,()=>{
    console.log("Sistema Inicializado", "Acesso: http://localhost/3030")
})
