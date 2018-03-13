import dispatcher from '../dispatcher'

export function updateFields(obj) {
  dispatcher.dispatch({
    type: 'UPDATE_FIELDS',
    obj
  })
}

export function close() {
  dispatcher.dispatch({
    type: 'CLOSE_POPUP'
  })
}
