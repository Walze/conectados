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

}



export default LicaoService