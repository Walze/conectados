import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'


class CategoriaStore extends EventEmitter {

  constructor() {
    super()

    this._categorias = [
      { id: 5, nome: 'kkfghkkghjfghjkkkk' },
      { id: 6, nome: 'niceboi2' },
      { id: 4, nome: 'testaroo' },
      { id: 2, nome: 'teste3' }
    ]
  }

  getCats() {
    return this._categorias
  }

  createCategoria(text) {
    this._categorias.push(text)
    this.emit('changes')
  }

  updateCategoria(obj) {
    const cat = this._categorias.find(cat => cat.id === obj.id)
    cat.nome = obj.nome

    this.emit('changes')
  }

  deleteCategoria(obj) {
    const cat = this._categorias.findIndex(cat => cat.id === obj.id)
    this._categorias.splice(cat, 1)

    this.emit('changes')
  }

  handleActions(action) {
    switch (action.type) {

      case 'CREATE_CAT':
        this.createCategoria(action.payload)
        break;
      case 'UPDATE_CAT':
        this.updateCategoria(action.payload)
        break;

      case 'DELETE_CAT':
        this.deleteCategoria(action.payload)
        break;

      default: break
    }
  }
}


const categoriaStore = new CategoriaStore()
dispatcher.register(categoriaStore.handleActions.bind(categoriaStore))

export default categoriaStore;