import dispatch_emmiter from './dispatch_emmiter'

export function add(payload) {
  dispatch_emmiter('ADD_CARD', payload);
}

export function updateCard(payload) {
  dispatch_emmiter('UPDATE_CARD', payload);
}

export function deleteCard(payload) {
  dispatch_emmiter('DELETE_CARD', payload);
}

export function swapPos(payload) {
  dispatch_emmiter('SWAP_POS', payload);
}
