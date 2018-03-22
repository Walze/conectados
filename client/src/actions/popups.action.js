import dispatcher from '../dispatcher'

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
