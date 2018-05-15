import axios from 'axios'
import { handle_error } from './helpers.service';


const API = 'http://localhost:3001'

export default class CardService {

  static insert(card) {
    const images = card.images
    delete card.id
    delete card.images

    console.log(card, images)

    return axios.post(`${API}/card`, card)
      .then(console.log)
      .catch(handle_error)
  }

  static swapPos(licao, pos) {
    console.log(licao, pos)
  }

}


