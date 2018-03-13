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
    return this._state
  }

  close() {
    this._state.hidden = true
    this.emit('changes')
  }

  updateState(obj) {
    this._state.fields = obj
    this._state.hidden = false

    console.log(this._state, obj)
    this.emit('changes')
  }

  handleActions(action) {
    switch (action.type) {

      case 'UPDATE_FIELDS':
        this.updateState(action.payload)
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