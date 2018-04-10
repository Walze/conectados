import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { Immutable } from '../Helpers'
import LicaoService from '../services/licao.service'

class LicoesStore extends EventEmitter {

  constructor() {
    super()

    this._licoes = []

    this.fetchAPI()

    window.licoes = this
  }

  fetchAPI() {
    LicaoService.all()
      .then(licoes => this.change(() => this._licoes = licoes))
      .catch(console.error)
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

    if (licao)
      cardIndex = licao.cards.findIndexOfObj('id', payload.id)

    switch (action.type) {
      case 'UPDATE_TITULO':
        this.change(() => {
          // payload = Licao          
          licao.titulo = payload.titulo
          licao.desc = payload.desc
          LicaoService.updateTitulo(payload)
            .then(console.info)
            .catch(console.error)
        })
        break

      case 'ADD_LICAO':
        // payload = Licao
        this.change(() => {
          this._licoes = Immutable.Push(this._licoes, payload)
          LicaoService.inserir(payload)
            .then(console.info)
            .catch(console.error)
        })
        break

      case 'LICAO_UPDATE_CAT':
        // payload = {id, categoria_id}
        this.change(() => {
          licao.categoria_id = payload.categoria_id
          LicaoService.updateTitulo(payload)
            .then(console.info)
            .catch(console.error)
        })
        break

      case 'DELETE_LICAO':
        // payload = id
        this.change(() => {
          this._licoes = Immutable.Delete(this._licoes, this._licoes.findIndexOfObj('id', payload))
          LicaoService.delete(payload)
            .then(console.info)
            .catch(console.error)
        })
        break

      case 'ADD_CARD':
        this.change(() =>
          licao.cards = Immutable.Push(licao.cards, payload)
        )
        break

      case 'UPDATE_CARD':
        this.change(() => licao.cards[cardIndex] = payload)
        break

      case 'DELETE_CARD':
        this.change(() =>
          licao.cards = Immutable.Delete(licao.cards, licao.cards.findIndexOfObj('id', payload.id))
        )
        break

      case 'SWAP_POS':
        // payload = {from, to}
        this.change(() => {
          if (payload.from !== 0 && payload.to !== 0) {

            const cardFrom = licao.cards.findObj('pos', payload.from)
            const cardTo = licao.cards.findObj('pos', payload.to)

            let temp = cardFrom.pos
            cardFrom.pos = cardTo.pos
            cardTo.pos = temp

            this.sortCards()
          }
        })
        break

      default: break
    }
  }
}


const licoesStore = new LicoesStore()
dispatcher.register(licoesStore.handleActions.bind(licoesStore))

export default licoesStore