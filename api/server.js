const express = require('express')
const cors = require('cors')
const api = express()

//cpmfiguração dos middlewares
api.use(express.json())
api.use(cors())


// configuração de rotas
api.get('/', (req, res) => {
    res.json({ message: 'API está funcionando!' })
})
