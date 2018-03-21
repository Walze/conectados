import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'


class PopUpStore extends EventEmitter {

  constructor() {
    super()

    this._state = {
      hidden: true,
      fields: {}
    }
  }

  getState() {
    return JSON.parse(JSON.stringify(this._state))
  }

  close() {
    this._state.hidden = true
    this.emit('changes')
  }

  open() {
    this._state.hidden = false
    this.emit('changes')
  }

  updateState(obj) {
    this._state.fields = obj
    this.open()
  }

  handleActions(action) {
    switch (action.type) {

      case 'UPDATE_FIELDS':
        this.updateState(action.payload)
        break;

      case 'OPEN_POPUP':
        console.log('penp')
        this.open()
        break;

      case 'CLOSE_POPUP':
        this.close()
        break;

      default: break
    }
  }
}


const popUpStore = new PopUpStore()
dispatcher.register(popUpStore.handleActions.bind(popUpStore))

export default popUpStore;