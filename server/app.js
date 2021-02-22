const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('./build'))

// CONEXAO
mongoose.connect("mongodb://localhost/asfeletro",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

//MODEL
const Produtos = new Schema({
    id : {type: Number},
    nome : {type: String},
    img : {type: String},
    valor : {type: Number},
    categoria : {type: String},
    localimg : {type: String}
})
mongoose.model("produtos", Produtos);

//CONTROLLER
const Collection = mongoose.model('produtos')

app.get('/produtos', async (req, res, next)=> {
  const response = await Collection.find()
  const dados = await response

  res.json(dados)
})

//O componente Produto esta sendo renderizado com SSR

app.listen(4000, ()=> {
    console.log('Link da API: http://localhost:4000/Produtos')
    console.log('Link da aplicação: http://localhost:4000/')
})