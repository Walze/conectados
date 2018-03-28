import dispatcher from '../dispatcher'

export function get() {
  dispatcher.dispatch({
    type: 'GET_LICOES'
  })
}
