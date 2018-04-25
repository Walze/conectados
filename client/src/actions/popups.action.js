import dispatch_emmiter from './dispatch_emmiter'

export function open(payload) {
  dispatch_emmiter('OPEN_POPUP', payload);
}

export function close(payload) {
  dispatch_emmiter('CLOSE_POPUP', payload);
}
