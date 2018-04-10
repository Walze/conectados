import { Licao, Card } from '../interfaces'
import axios from 'axios'

const API = 'http://localhost:3001'

class LicaoService {

  static all() {
    return new Promise((res, rej) =>
      axios.get(API + '/licao')
        .then(resp => {
          const licoes = resp.data.map(licao => {
            licao = new Licao(licao)
            licao.cards = licao.cards.map(card => card = new Card(card))
            return licao
          })

          res(licoes)
        })
        .catch(rej)
    )
  }

  static inserir(licao) {
    delete licao.id
    delete licao.cards

    return new Promise((res, rej) =>
      axios.post(API + '/licao', licao)
        .then(res)
        .catch(rej)
    )
  }

  static delete(id) {
    return new Promise((res, rej) =>
      axios.delete(API + '/licao/' + id)
        .then(res)
        .catch(rej)
    )
  }

  static updateTitulo(changes) {
    delete changes.cards

    return new Promise((res, rej) =>
      axios.put(API + '/licao/' + changes.id, changes)
        .then(res)
        .catch(rej)
    )
  }

}



export default LicaoService