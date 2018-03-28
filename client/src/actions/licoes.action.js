import dispatcher from '../dispatcher'

export function add(payload) {
  dispatcher.dispatch({
    type: 'ADD_LICAO',
    payload
  })
}
