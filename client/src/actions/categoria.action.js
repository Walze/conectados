import dispatcher from '../dispatcher'

export function createCat(payload) {
  dispatcher.dispatch({
    type: 'CREATE_CAT',
    payload
  })
}

export function updateCat(payload) {
  dispatcher.dispatch({
    type: 'UPDATE_CAT',
    payload
  })
}

export function deleteCat(payload) {
  dispatcher.dispatch({
    type: 'DELETE_CAT',
    payload
  })
}
