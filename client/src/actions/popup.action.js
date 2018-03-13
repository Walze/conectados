import dispatcher from '../dispatcher'

export function updateFields(payload) {
  dispatcher.dispatch({
    type: 'UPDATE_FIELDS',
    payload
  })
}

export function close() {
  dispatcher.dispatch({
    type: 'CLOSE_POPUP'
  })
}
