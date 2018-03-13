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

    this.emit('changes')
  }

  handleActions(action) {
    switch (action.type) {

      case 'UPDATE_FIELDS':
        this.updateState(action.obj)
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