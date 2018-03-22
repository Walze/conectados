import dispatcher from '../dispatcher'
import { EventEmitter } from 'events'


class Popup {
  constructor(id, hidden) {
    this.id = id
    this.hidden = hidden
  }
}

class PopUpsStore extends EventEmitter {

  constructor() {
    super()


    this.popups = []
    this.popups.findObj = function (prop, value) {
      for (var i = 0, len = this.length; i < len; i++)
        if (String(this[i][prop]) === String(value))
          return this[i]
    }

  }
  create() {
    let id = this.popups.length

    this.popups.push(new Popup(id, true))

    return new Popup(id, true)
  }

  getState(id) {
    return Object.assign({}, this.popups.findObj('id', id))
  }

  close(id) {
    const popup = this.popups.findObj('id', id)

    popup.hidden = true

    this.emit('changes')
  }

  open(id) {
    const popup = this.popups.findObj('id', id)
    popup.hidden = false

    this.emit('changes')
  }

  handleActions(action) {
    switch (action.type) {

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