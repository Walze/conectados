import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { makeid } from '../Helpers'

function genCards() {
  return [
    { id: 1, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 1 },
    { id: 2, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 2 },
    { id: 3, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 3 },
    { id: 4, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 4 },
    { id: 5, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 5 },
    { id: 6, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 6 },
  ]
}

class LicoesStore extends EventEmitter {

  constructor() {
    super()


    this._licoes = [
      {
        titulo: 'Lição #23',
        categoria_id: 'Categoria1',
        cards: genCards(),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      },

      {
        titulo: 'Lição #24',
        categoria_id: 'Categoria2',
        cards: genCards(),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil.',
      },

      {
        titulo: 'Lição #25',
        categoria_id: 'Categoria3',
        cards: genCards(),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      },

      {
        titulo: 'Lição #26',
        categoria_id: 'Categoria4',
        cards: genCards(),
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nihil.',
      },
    ]

    window.licoes = this
  }

  get() {
    return [...this._licoes]
  }

  handleActions(action) {
    const load = action.payload

    switch (action.type) {

      default: break
    }
  }
}


const licoesStore = new LicoesStore()
dispatcher.register(licoesStore.handleActions.bind(licoesStore))

export default licoesStore;