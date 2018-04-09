import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { makeid, Immutable } from '../Helpers'
import { Licao, Card } from '../interfaces'

//temp
const genCards = id =>
  [
    new Card({ id: 1, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 1 }),
    new Card({ id: 2, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 2 }),
    new Card({ id: 3, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 3 }),
    new Card({ id: 4, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 4 }),
    new Card({ id: 5, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 5 }),
    new Card({ id: 6, licao_id: id, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), images: [], pos: 6 }),
  ]


class LicoesStore extends EventEmitter {

  constructor() {
    super()


    this._licoes = [
      new Licao({
        id: 1,
        titulo: 'Lição #23',
        categoria_id: 1,
        cards: genCards(1),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),

      new Licao({
        id: 2,
        titulo: 'Lição #24',
        categoria_id: 2,
        cards: genCards(2),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil.',
      }),

      new Licao({
        id: 3,
        titulo: 'Lição #25',
        categoria_id: 3,
        cards: genCards(3),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),

      new Licao({
        id: 4,
        titulo: 'Lição #26',
        categoria_id: 4,
        cards: genCards(4),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),
    ]

    window.licoes = this
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

  sort() {
    const sortFunc = (a, b) => {
      if (a.pos < b.pos)
        return -1;
      if (a.pos > b.pos)
        return 1;
      return 0;
    }

    this._licoes.map(lic => lic.cards.sort(sortFunc))
  }

  handleActions(action) {
    const payload = action.payload
    const licao = this.find(payload.licao_id) || this.find(payload.id)
    let cardIndex;

    if (licao)
      cardIndex = licao.cards.findIndexOfObj('id', payload.id);

    switch (action.type) {
      case 'UPDATE_TITULO':
        this.change(() => {
          licao.titulo = payload.titulo
          licao.desc = payload.desc
        })
        break

      case 'ADD_LICAO':
        this.change(() => this._licoes = Immutable.Push(this._licoes, payload))
        break

      case 'UPDATE_CAT':
        // payload = {id, cat_id}
        this.change(() => {
          licao.categoria_id = payload.cat_id
        })
        break

      case 'DELETE_LICAO':
        // payload = id
        this.change(() =>
          this._licoes = Immutable.Delete(this._licoes, this._licoes.findIndexOfObj('id', payload))
        )
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

            this.sort()
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