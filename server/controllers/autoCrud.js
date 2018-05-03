const db = require('../DB')


function CrudListener(table, express) {
  //all
  express.get(`/${table}`, function (request, response) {
    db.all(table)
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })

  //id
  express.get(`/${table}/:id`, function (request, response) {
    db.id(table, req.params.id)
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })

  //find
  express.post(`/${table}/find`, function (request, response) {
    db.find(table, req.body)
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })

  //insert
  express.post(`/${table}`, function (request, response) {
    db.insert(table, req.body)
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })

  //update
  express.put(`/${table}/:id`, function (request, response) {
    db.update(table, req.body, { id: req.params.id })
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })

  //delete
  express.delete(`/${table}/:id`, function (request, response) {
    db.delete(table, { id: Number(req.params.id) })
      .then(res => response.send(res))
      .catch(res => response.send(res))
  })
}

module.exports = CrudListener