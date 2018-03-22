import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'


class Popup {
  constructor(id, state) {
    this.id = id
    this.state = state
  }
}

class PopUpsStore extends EventEmitter {

  constructor() {
    super()

    this._state = {
      hidden: true
    }

    this.popups = []
    this.popups.findObj = function (prop, value) {
      for (var i = 0, len = this.length; i < len; i++)
        if (String(this[i][prop]) === String(value))
          return this[i]
    }

  }

  create(id) {
    const stateCopy = JSON.parse(JSON.stringify(this._state))

    this.popups.push(new Popup(id, stateCopy))

    return new Popup(id, stateCopy)
  }

  getState(id) {
    return this.popups.findObj('id', id)
  }

  close(id) {
    const popup = this.popups.findObj('id', id)

    popup.state.hidden = true

    this.emit('changes')
  }

  open(id) {
    const popup = this.popups.findObj('id', id)
    console.warn(popup)

    popup.state.hidden = false

    this.emit('changes')
  }

  updateState(obj) {
    console.log(obj, 'aaaaaaaaaaaaa')
    this._state.fields = obj
    this.open()
  }

  handleActions(action) {
    switch (action.type) {

      case 'UPDATE_FIELDS':
        this.updateState(action.payload)
        break;

      case 'OPEN_POPUP':
        this.open(action.payload)
        break;

      case 'CLOSE_POPUP':
        this.close(action.payload)
        break;

      default: break
    }
  }
}


const popupsStore = new PopUpsStore()
dispatcher.register(popupsStore.handleActions.bind(popupsStore))

export default popupsStore;