import dispatcher from '../dispatcher'

export function createCat(text) {
  dispatcher.dispatch({
    type: 'CREATE_CAT',
    text
  })
}
