const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const log = require('better-log')
log.setConfig({ depth: 2 })

const LicaoController = require('./controllers/licao.controller')
const crud = require('./controllers/autoCrud')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Content-Type", "application/json")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const PORT = 3001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

const TABLES = ['licao', 'categoria', 'card', 'imagens']


// Route Overrides
app.get('/licao', LicaoController.all)
app.get('/licao/:id', LicaoController.find)




TABLES.map(table => crud(table, app))