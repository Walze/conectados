import dispatcher from '../dispatcher'

export function updateFields(payload) {
  console.log('updated')
  dispatcher.dispatch({
    type: 'UPDATE_FIELDS',
    payload
  })
}

export function open() {
  dispatcher.dispatch({
    type: 'OPEN_POPUP'
  })
}

export function close() {
  dispatcher.dispatch({
    type: 'CLOSE_POPUP'
  })
}
