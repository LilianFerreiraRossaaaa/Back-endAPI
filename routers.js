const express = require('express');
const axios = require ('axios');
const app = express();
const PORT = 3000;
 
app.use(express.json());
 
 
//rota do meu index
 
app.get('/', async(req, res)=>{
    const mensagem ={
        mensagem1: 'Esse é o servidor de APIs!',
        mensagem2: 'Digite /post para acessar a API posts',
        mensagem4: 'Digite /comments para acessar a API comments',
        mensagem5: 'Digite /albums para acessar a API albums',
        mensagem6: 'Digite /photos para acessar a API photos',
        mensagem7: 'Digite /todos para acessar todas as APIs criadas ',
        mensagem8: 'Digite /users para acessar a API users'
    }
    res.json(mensagem);
})
 
 
 
//rota dos "posts"
app.get('/posts', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/posts')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error:'Erro! Sua API não está conseguindo ser acessada'});
    }
});
 
//rota dos "comments"
 
app.get('/comments', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/comments')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Sua API não está conseguindo ser acessada'})
    }
})
 
 
//rota dos "albums"
 
app.get('/albums', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/albums')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Sua API não está conseguindo ser acessada'});
    }
});
 
 
//rota das "photos"
 
app.get('/photos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/photos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Sua API não está conseguindo ser acessada'});
    }
});
 
//rota de "todos"
 
app.get('/todos', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/todos')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: 'Erro! Sua API não está conseguindo ser acessada'});
    }
});
 
 
//rota dos "users"
 
app.get('/users', async(req,res)=>{
    try {
        const response = await
        axios.get('https://jsonplaceholder.typicode.com/users')
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: ' Erro! Sua API não está conseguindo ser acessada'});
    }
});
 
 
// inciando o meu servidor
 
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})