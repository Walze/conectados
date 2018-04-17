import { Licao, Card } from '../interfaces'
import axios from 'axios'

function handle_error(...args) {
  console.error(...args)
  alert('Erro! Veja o console.')
}

const API = 'http://localhost:3001'

class LicaoService {

  static all() {
    return axios.get(`${API}/licao`)
      .then(resp =>
        resp.data.map(licao => {
          licao = new Licao(licao)
          licao.cards = licao.cards.map(card => card = new Card(card))
          return licao
        })
      ).catch(handle_error)
  }

  static inserir(licao) {
    delete licao.id
    delete licao.cards

    return axios.post(`${API}/licao`, licao).catch(handle_error)
  }

  static remove(id) {
    return axios.delete(`${API}/licao/${id}`).catch(handle_error)
  }

  static update_titulo(changes) {
    delete changes.cards

    return axios.put(`${API}/licao/${changes.id}`, changes).catch(handle_error)
  }

}



export default LicaoService