import dispatcher from '../dispatcher'

export function add(payload) {
  dispatcher.dispatch({
    type: 'ADD_LICAO',
    payload
  })
}

export function updateTitulo(payload) {
  dispatcher.dispatch({
    type: 'UPDATE_TITULO',
    payload
  })
}

export function updateCat(payload) {
  dispatcher.dispatch({
    type: 'UPDATE_CAT',
    payload
  })
}

export function deleteLicao(payload) {
  dispatcher.dispatch({
    type: 'DELETE_LICAO',
    payload
  })
}
