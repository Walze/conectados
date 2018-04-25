const db = require('../DB')


function Crud_Listener(table, express_instance) {

  //all
  express_instance.get(`/${table}`, (req, res) => {
    db.all(table)
      .then(res.jsonp)
      .catch(res.jsonp)
  })

  //id
  express_instance.get(`/${table}/:id`, (req, res) => {
    db.id(table, req.params.id)
      .then(res.jsonp)
      .catch(res.jsonp)
  })

  //find
  express_instance.post(`/${table}/find`, (req, res) => {
    db.find(table, req.body)
      .then(res.jsonp)
      .catch(res.jsonp)
  })

  //insert
  express_instance.post(`/${table}`, (req, res) => {
    db.insert(table, req.body)
      .then(res.jsonp)
      .catch(res.jsonp)
  })

  //update
  express_instance.put(`/${table}/:id`, (req, res) => {
    db.update(table, req.body, { id: req.params.id })
      .then(res.jsonp)
      .catch(res.jsonp)
  })

  //delete
  express_instance.delete(`/${table}/:id`, (req, res) => {
    db.delete(table, { id: Number(req.params.id) })
      .then(res.jsonp)
      .catch(res.jsonp)
  })
}

module.exports = Crud_Listener