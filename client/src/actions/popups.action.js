import dispatcher from '../dispatcher'

export function updateFields(payload) {
  console.log('updated')
  dispatcher.dispatch({
    type: 'UPDATE_FIELDS',
    payload
  })
}

export function open(id) {
  dispatcher.dispatch({
    type: 'OPEN_POPUP',
    payload: id
  })
}

export function close(id) {
  dispatcher.dispatch({
    type: 'CLOSE_POPUP',
    payload: id
  })
}
