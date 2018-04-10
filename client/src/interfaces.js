




export class Licao {
  constructor(obj = {}) {
    this.titulo = obj.titulo || ''
    this.desc = obj.desc || ''
    this.categoria_id = obj.categoria_id || 0
    this.cards = obj.cards || []
  }
}

export class Card {
  constructor(obj = {}) {
    this.text = obj.text || ''
    this.images = obj.images || ['']
    this.pos = obj.pos || 0
    this.licao_id = obj.licao_id || 0
  }
}