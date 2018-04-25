import dispatch_emmiter from './dispatch_emmiter'

export function createCat(payload) {
  dispatch_emmiter('CREATE_CAT', payload);
}

export function updateCat(payload) {
  dispatch_emmiter('UPDATE_CAT', payload);
}

export function deleteCat(payload) {
  dispatch_emmiter('DELETE_CAT', payload);
}
