import dispatcher from '../dispatcher'

export default function dispatch_emmiter(type, payload) {
  dispatcher.dispatch({ type, payload });
}
