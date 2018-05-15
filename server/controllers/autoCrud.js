const db = require('../DB')


function CrudListener(table, express) {
  //all
  express.get(`/${table}`, function (request, response) {
    db.all(table)
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })

  //id
  express.get(`/${table}/:id`, function (request, response) {
    db.id(table, request.params.id)
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })

  //find
  express.post(`/${table}/find`, function (request, response) {
    db.find(table, request.body)
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })

  //insert
  express.post(`/${table}`, function (request, response) {
    db.insert(table, request.body)
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })

  //update
  express.put(`/${table}/:id`, function (request, response) {
    db.update(table, request.body, { id: request.params.id })
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })

  //delete
  express.delete(`/${table}/:id`, function (request, response) {
    db.delete(table, { id: Number(request.params.id) })
      .then(res => response.send(res))
      .catch(res => response.sendStatus(409).send(res))
  })
}

module.exports = CrudListener