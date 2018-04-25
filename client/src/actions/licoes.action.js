import dispatch_emmiter from './dispatch_emmiter'


export function add(payload) {
  dispatch_emmiter('ADD_LICAO', payload);
}

export function updateTitulo(payload) {
  dispatch_emmiter('UPDATE_TITULO', payload);
}

export function updateCat(payload) {
  dispatch_emmiter('LICAO_UPDATE_CAT', payload);
}

export function deleteLicao(payload) {
  dispatch_emmiter('DELETE_LICAO', payload);
}


