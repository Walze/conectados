const db = require('./DB')

module.exports = {
  all: (req, res) => {
    const queryLicao = `SELECT * FROM licao`;
    const queryCards = `SELECT * FROM card`;
    db.run(queryLicao)
      .then(licoes => db.run(queryCards).then(cards => {
        licoes.map(licao => licao.cards = cards.filter(card => card.licao_id === licao.id));
        res.send(licoes);
      }).catch(err => res.status(500).send(err))).catch(err => res.status(500).send(err));
  },

  find: (req, res) => {
    const queryLicao = `SELECT * FROM licao WHERE id = ${req.params.id}`
    const queryCards = `SELECT * FROM card WHERE licao_id = ${req.params.id}`

    db.run(queryLicao)
      .then(resp => {
        const licao = resp[0]

        db.run(queryCards).then(resp2 => {
          licao.cards = resp2

          res.send(licao)

        }).catch(err => res.status(500).send(err))
      }).catch(err => res.status(500).send(err))
  }
}
