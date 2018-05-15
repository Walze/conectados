import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { Immutable } from '../Helpers'
import LicaoService from '../services/licao.service'
import CardService from '../services/card.service'

class LicoesStore extends EventEmitter {

  constructor() {
    super()

    this._licoes = []
    this.fetchAPI()

    window.licoes = this
  }

  fetchAPI() {
    LicaoService
      .all()
      .then(licoes => {
        this.change(() => {
          console.log(licoes)
          this._licoes = licoes
        })
      })
  }

  find(id) {
    return this._licoes.findObj('id', id)
  }

  get() {
    return [...this._licoes]
  }

  change(fn) {
    fn()
    this.emit('changes')
  }

  sortCards() {
    const sortFunc = (a, b) => {
      if (a.pos < b.pos)
        return -1
      if (a.pos > b.pos)
        return 1
      return 0
    }

    this._licoes.map(licao => licao.cards.sortCards(sortFunc))
  }



  handleActions(action) {
    const payload = action.payload
    const licao = this.find(payload.licao_id) || this.find(payload.id)
    let cardIndex

    if (licao) cardIndex = licao.cards.findIndexOfObj('id', payload.id)

    switch (action.type) {
      case 'UPDATE_TITULO':
        this.update_titulo(licao, payload);
        break

      case 'ADD_LICAO':
        // payload = Licao
        this.add_licao(payload);
        break

      case 'LICAO_UPDATE_CAT':
        // payload = {id, categoria_id}
        this.licao_update_cat(licao, payload);
        break

      case 'DELETE_LICAO':
        // payload = id
        this.delete_licao(payload);
        break

      case 'ADD_CARD':
        // payload = Card
        this.add_card(licao, payload);
        break

      case 'UPDATE_CARD':
        this.update_card(licao, cardIndex, payload);
        break

      case 'DELETE_CARD':
        this.delete_card(licao, payload);
        break

      case 'SWAP_POS':
        // payload = {from, to}
        this.swap_pos(payload, licao);
        break

      default: break
    }
  }

  swap_pos(payload, licao) {
    this.change(() => {
      if (payload.from !== 0 && payload.to !== 0) {
        const cardFrom = licao.cards.findObj('pos', payload.from);
        const cardTo = licao.cards.findObj('pos', payload.to);
        let temp = cardFrom.pos;
        cardFrom.pos = cardTo.pos;
        cardTo.pos = temp;
        this.sortCards();
      }
    });
  }

  delete_card(licao, payload) {
    this.change(() => licao.cards = Immutable.Delete(licao.cards, licao.cards.findIndexOfObj('id', payload.id)));
  }

  update_card(licao, cardIndex, payload) {
    this.change(() => licao.cards[cardIndex] = payload);
  }

  add_card(licao, payload) {
    payload.pos = licao.cards.length + 1
    this.change(() => licao.cards = Immutable.Push(licao.cards, payload));
    CardService.insert(payload)
  }

  delete_licao(payload) {
    this.change(() => {
      this._licoes = Immutable.Delete(this._licoes, this._licoes.findIndexOfObj('id', payload));
      LicaoService.remove(payload);
    });
  }

  licao_update_cat(licao, payload) {
    this.change(() => {
      licao.categoria_id = payload.categoria_id;
      LicaoService.update_titulo(payload);
    });
  }

  add_licao(payload) {
    this.change(() => {
      this._licoes = Immutable.Push(this._licoes, payload);
      LicaoService.inserir(payload);
    });
  }

  update_titulo(licao, payload) {
    this.change(() => {
      // payload = Licao          
      licao.titulo = payload.titulo;
      licao.desc = payload.desc;
      LicaoService.update_titulo(payload);
    });
  }
}


const licoesStore = new LicoesStore()
dispatcher.register(licoesStore.handleActions.bind(licoesStore))

export default licoesStore