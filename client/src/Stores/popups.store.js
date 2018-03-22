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

    let id = (Math.random())

    while (this.popups.findObj('id', id))
      id = (Math.random())


    this.popups.push(new Popup(id, true))

    return new Popup(id, true)
  }

  getState(id) {
    return this.popups.findObj('id', id)
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

  updateState(obj) {
    console.log(obj, 'aaaaaaaaaaaaa')
    this.hidden.fields = obj
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