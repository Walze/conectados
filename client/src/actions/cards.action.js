import dispatcher from '../dispatcher'

export function add(payload) {
  dispatcher.dispatch({
    type: 'ADD_CARD',
    payload
  })
}

export function updateCard(payload) {
  dispatcher.dispatch({
    type: 'UPDATE_CARD',
    payload
  })
}

export function deleteCard(payload) {
  dispatcher.dispatch({
    type: 'DELETE_CARD',
    payload
  })
}

export function swapPos(payload) {
  dispatcher.dispatch({
    type: 'SWAP_POS',
    payload
  })
}
