const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')



const log = require('better-log')
log.setConfig({ depth: 2 })

const LicaoController = require('./controllers/licao.controller')
const crud = require('./controllers/autoCrud')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors)
app.use(morgan('tiny'))

const PORT = 3001
app.listen(PORT, e => console.log(`Listening on port ${PORT}`))

const TABLES = ['licao', 'categoria', 'card', 'imagens']

const db = require('./DB')

db.run('SELECT * FROM card')
  .then(log)
  .catch(log)

// Route Overrides
app.get('/licao', LicaoController.all)
app.get('/licao/:id', LicaoController.find)
app.post('/cardswap', (req, res) => {
  const posData = req.body

  //   `
  //   update \`card\`
  //     set pos = case pos
  //       when 3 then (select pos from (SELECT * FROM card) as cardT where pos = 2 and licao_id = 2)
  //       when 2 then (select pos from (SELECT * FROM card) as cardT where pos = 3 and licao_id = 2)
  //     end
  //   where pos in (2, 3);
  // `


  const query = `
    update \`card\`
      set pos = case pos
        when ${posData.to} then (select pos from (SELECT * FROM card) as cardT where pos = ${posData.from} and licao_id = ${posData.licao_id})
        when ${posData.from} then (select pos from (SELECT * FROM card) as cardT where pos = ${posData.to} and licao_id = ${posData.licao_id})
      end
    where pos in (${posData.to},${posData.from});
  `
    .replace(/(\r\n\t|\n|\r\t)/gm, "")
    .trim()

  db.run(query)
    .then(log)
    .catch(log)
})


TABLES.map(table => crud(table, app))












function cors(req, res, next) {
  res.header("Content-Type", "application/json")
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
}