import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { makeid, array as Immutable } from '../Helpers'
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
        categoria_id: 'Categoria1',
        cards: genCards(1),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),

      new Licao({
        id: 2,
        titulo: 'Lição #24',
        categoria_id: 'Categoria2',
        cards: genCards(2),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil.',
      }),

      new Licao({
        id: 3,
        titulo: 'Lição #25',
        categoria_id: 'Categoria3',
        cards: genCards(3),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),

      new Licao({
        id: 4,
        titulo: 'Lição #26',
        categoria_id: 'Categoria4',
        cards: genCards(4),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      }),
    ]

    window.licoes = this
  }

  get() {
    return [...this._licoes]
  }

  change(fn) {
    fn()
    this.emit('changes')
  }

  handleActions(action) {
    const load = action.payload

    switch (action.type) {

      case 'ADD_LICAO':
        this.change(() => this._licoes = Immutable.Push(this._licoes, load))
        break

      case 'ADD_CARD':
        this.change(() => {
          const licao = this._licoes.findObj('id', load.licao_id)
          licao.cards = Immutable.Push(licao.cards, load)
        })
        break

      default: break
    }
  }
}


const licoesStore = new LicoesStore()
dispatcher.register(licoesStore.handleActions.bind(licoesStore))

export default licoesStore